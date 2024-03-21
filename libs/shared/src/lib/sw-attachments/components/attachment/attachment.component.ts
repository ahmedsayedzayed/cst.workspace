import { ToasterService } from '@abp/ng.theme.shared';
import { Component, OnInit, Output, Input, EventEmitter, ViewChild, forwardRef, ContentChild, TemplateRef, SimpleChanges, OnChanges, Optional, Host, SkipSelf} from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControlName, FormGroup, NG_VALUE_ACCESSOR, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AttachmentService } from '../../shared/service/attachment.service';
import { SWConfirmationService } from '../../../components/confirmation/service/confirmation.service';
import { SWConfirmation } from '../../../components/confirmation/service/confirmation';
import { AttachmentDownloadService } from '../../shared/service/attachment-download.service';
import { PreviewModeEnum } from '../base64-file-preview/base64-file-preview.component';
import { ValidationConsts } from '../../../common-files/consts/validation.consts';
import { Subscription, finalize } from 'rxjs';
import { FileSelectEvent, FileUpload } from 'primeng/fileupload';
import { HttpClient } from '@angular/common/http';
import { uploadHandler } from '../../file-upload.function';
import { FileSizePipe } from '../../pipe/file-size.pipe';
import { AttachmentDetailDtoExtend, AttachmentFileDto, AttachmentUpdatedDto, SelectEvent } from '../../shared/model/models';
import { AttachmentDetailsPipe } from '../../pipe/attachment-details.pipe';

function uploadAttachmentValidator(isUploading: boolean, isRequired: boolean): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return isUploading ? { uploadingInProgress: true } 
    : (isRequired && !control.value ? { required: true} : null) ;
  };
}

@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AttachmentComponent),
      multi: true,
    },
    AttachmentService,
    AttachmentDetailsPipe,
    FileSizePipe
  ],
})
export class AttachmentComponent implements OnInit, OnChanges, ControlValueAccessor {
  @ViewChild('pFileUpload', { static: false }) pFileUpload: FileUpload;
  @ContentChild('attachmentFiles') attachmentFiles: TemplateRef<any>;
  private attachmentIdValue = 0;
  @Input() get attachmentId() { return this.attachmentIdValue; }
  @Input() get AttachmentsList(): number[] { return this.files.reduce((a, o) => (a.push(o.id), a), []);}
  @Input({ required: true }) entity = '';
  @Input({ required: true }) moduleName = '';
  isReadonly = false;
  @Input() maxFilesCount = 1;
  @Input() asTime = '';
  @Input() acceptTypes: string = ValidationConsts.FD053FileExtension;
  @Input() maxFileSize = ValidationConsts.FD053FileSize;
  @Input() formControlName:string;
  @Input() isRequired:boolean = false;
  @Output() filesCount = 0;
  @Output() attachmentUpdated: EventEmitter<AttachmentUpdatedDto> = new EventEmitter<AttachmentUpdatedDto>();
  uploadingFile:{name: string, size: number, extension: string};
  files: AttachmentDetailDtoExtend[] = [];
  fileAcceptTypes:string = '';
  _isUploading;
  get isUploading() { return this._isUploading; }
  set isUploading(value: boolean){ 
    if(this._isUploading === value) { return;}
    this._isUploading = value; 
    this._refreshFormControlValidators();
  }
  PreviewModeEnum = PreviewModeEnum;
  previewImage: AttachmentFileDto;
  private sub$: Subscription;
  private isPreventRefreshList = false;
  isRichMaxFileLimit = false;
  get uploadUrl() {  return this._attachmentService.getActionUrl() + `?AttachmentId=${this.attachmentId}&Entity=${this.entity}&AsTime=${this.asTime}`; }

  constructor(
    private toaster: ToasterService,
    private _SWconfirmationService: SWConfirmationService,
    private _attachmentService: AttachmentService,
    private http: HttpClient,
    private _fileSizePipe: FileSizePipe,
    private _attachmentDetailsPipe: AttachmentDetailsPipe,
    @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["moduleName"]){
      this._attachmentService.moduleName = changes["moduleName"].currentValue;
    }
    if(changes["isRequired"]){
      this._refreshFormControlValidators();
    }
  }
  // c) copy paste this code
  onChange: any = () => {};
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  writeValue(obj: any): void {
    this.attachmentId = obj;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadonly = isDisabled;
  }

  ngOnInit() {
    this.fileAcceptTypes = this.acceptTypes.split(',').map(e => e.replace('.','')).join(' , ').toLocaleUpperCase();
    this.isUploading = false;
  }
    onSelect(event: FileSelectEvent) {
    let file = event.files[0];
    this.uploadingFile =  {
      name: file.name,
      extension: file.name.split('.').pop(),
      size: file.size,
    };
 
    if(this.uploadingFile.size > this.maxFileSize){
      this.toaster.error('::InvalidFileSizeMessageDetail', '::InvalidFileSizeMessageSummary', {
        messageLocalizationParams: [this._fileSizePipe.transform(this.maxFileSize)]
      });
      this.pFileUpload.clear();
      return;
    }
    if(!this.acceptTypes.split(',').map(e => e.replace('.','')).find(x => x.toLowerCase() == this.uploadingFile.extension.toLowerCase())){
      this.toaster.error('::InvalidFileTypeMessageDetail', '::InvalidFileTypeMessageSummary');
      this.pFileUpload.clear();
      return;
    }
    if(this.files.length >= this.maxFilesCount){
      this.toaster.error('::InvalidFileLimitMessageDetail', '::InvalidFileLimitMessageSummary');
      this.pFileUpload.clear();
      return;
    }
  }

  onBeforeUpload(event) {
    this.isUploading = true;
  }

  onError(event) {
    this.isUploading = false;
    if (event.error?.error?.error?.message) {
      let errorMessage = event.error.error.error.message;
      this.pFileUpload.clear();
      this.toaster.error(errorMessage, this._attachmentService.l('Error'));
    }
  }

  onUpload(event) {
    if (
      event.originalEvent.body.result === 'na' ||
      event.originalEvent.body.result === 'har' ||
      event.originalEvent.body.result === 'df'
    ) {
      this.isUploading = false;
      this.toaster.error(
        this._attachmentService.l('AttachmentFileExtNotAllowed'),
        this._attachmentService.l('Error')
      );
      return;
    }

    this.handleUploadComplete(
      event.files,
      event.originalEvent.body.fileSize,
      event.originalEvent.body.fileName,
      event.originalEvent.body.attachmentId,
      event.originalEvent.body.id,
      event.originalEvent.body.extension
    );
  }

  private async handleUploadComplete(
    file: File[],
    fileSize: number,
    fileName: string,
    attachmentId: number,
    attachmentDetailId: number,
    extension: string
  )  {
    this.isUploading = false;

    if (fileSize === -1) {
      this.toaster.error(this._attachmentService.l(fileName), this._attachmentService.l('Error'));
      return;
    } 
    this.isPreventRefreshList = true;
    this.attachmentId = attachmentId;
    this.isPreventRefreshList = false;


    if (this.filesCount === undefined || this.filesCount === null || this.filesCount === 0) {
      //set temporarly
      this.filesCount = 1;
    } else {
      this.filesCount += 1;
    }



    //add file manually
    let attachment = {
        fileName : fileName,
        fileSize : fileSize,
        attachmentId : attachmentId,
        id : attachmentDetailId,
        extension : extension,
        isImageFile: ValidationConsts.FD052FileExtension.split(',').map(e => e.replace('.','')).findIndex(x => x == extension) != -1,
        directLink: this._attachmentDetailsPipe.transform(attachmentDetailId, this.entity, this.moduleName)
    } as AttachmentDetailDtoExtend;
    this.files.push(attachment);
    this.emitAttachmentUpdated(false);

    this.toaster.success(
      this._attachmentService.l('FileUploadSuccess'),
    );
  }

  private emitAttachmentUpdated(isAfterRefresh: boolean) {
    this.isRichMaxFileLimit = this.filesCount >= this.maxFilesCount;

    let attachmentUpdatedResult = new AttachmentUpdatedDto();
    attachmentUpdatedResult.filesCount = this.filesCount;
    let selectedIds = this.files.map((attachmentDetail) => attachmentDetail.id);
    attachmentUpdatedResult.files = selectedIds;
    attachmentUpdatedResult.isAfterRefresh = isAfterRefresh;
    this.attachmentUpdated.emit(attachmentUpdatedResult);
    if (isAfterRefresh === false) {
      this.onChange(this.attachmentId);
    }
  }



  set attachmentId(val) {
    //attachment id set: " + val + "  entity: " + this.entity
    let isChanged: Boolean = this.attachmentIdValue !== val;
    if (this.isReadonly) {
      isChanged = true;
    }

    this.attachmentIdValue = val;

    if (
      this.attachmentIdValue !== null &&
      this.attachmentIdValue !== 0 &&
      isChanged === true &&
      this.isPreventRefreshList === false
    ) {
      this.getAttachmentList();
    }
  }

  

  private getAttachmentList() {
    let self = this;
    let attId = this.attachmentIdValue;
    this._attachmentService.getAllByAttachmentId(attId, this.entity, this.asTime)
    .subscribe({
      next: (result) => {
        self.files = result.items.map(file => ({
            fileName: file.fileName,
            fileSize: file.fileSize,
            attachmentId: file.attachmentId,
            id: file.id,
            extension: file.extension,
            isImageFile: ValidationConsts.FD052FileExtension.split(',').map(e => e.replace('.','')).findIndex(x => x == file.extension) != -1,
            directLink: this._attachmentDetailsPipe.transform(file.id, this.entity, this.moduleName)
        } as AttachmentDetailDtoExtend));
        if (result.items !== null) {
          self.filesCount = result.items.length;
        }
        self.emitAttachmentUpdated(true);
      },
      error: () => {
        self.emitAttachmentUpdated(true);
      }}
    );
  }

  removeFileById(id) {
    this._SWconfirmationService
      .warn(
        this._attachmentService.l('ConfirmDeleteAttachment'),
        this._attachmentService.l('DeleteConfimation'), undefined,
        {yesSeverity:'error' , yesText:'::DeleteConfimation:SaveButton'}
      )
      .subscribe(r => {
        if (r == SWConfirmation.SWStatus.confirm) {
          this.deleteConfirmed(id);
          this._refreshFormControlValidators();
        }
      });
  }

  private deleteConfirmed(id) {
    this._attachmentService.deleteAttachment(id, this.entity).subscribe({
      next: (result) => {
        this.toaster.error(this._attachmentService.l('SuccessfullyDeleted'));
        this.files = this.files.filter(x => x.id !== id);
        if (this.files !== null) {
          this.filesCount = this.files.length;
        }
        const isForceUpdate = this.filesCount <= 0;
        if (isForceUpdate) {
          this.attachmentId = 0;
        }
        this.emitAttachmentUpdated(false);
      },
    });
  }
  download(attachmentDetails: AttachmentDetailDtoExtend){
      const toasterId = this.toaster.warn("::Attachment:LoadingFile", undefined, {life: 10000, messageLocalizationParams: [attachmentDetails.fileName]});
      this._attachmentService.downloadAttachment(attachmentDetails.id, this.entity)
      .pipe(finalize(() => this.toaster.remove(toasterId as any) ))
      .subscribe(res => {
          AttachmentDownloadService.saveFile(res.data, res.filename);
      });
  }


  cancelUploadingFiles(){
    this.isUploading = false;
    this.sub$?.unsubscribe();
    this.pFileUpload.clear();
  }
  uploadFile($event){
    this.sub$ = uploadHandler(this.pFileUpload, this.http);
  }

  private _refreshFormControlValidators(){
    if(this.controlContainer){
      const control = this.controlContainer.control.get(this.formControlName);
      control.setValidators([uploadAttachmentValidator(this.isUploading, this.isRequired)]);
      control.updateValueAndValidity();
    }
  }

}


