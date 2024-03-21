import { Observable, Subscription, finalize } from 'rxjs';
import { ChangeDetectorRef, Component, ContentChild, Input, OnChanges, OnDestroy, SimpleChanges, TemplateRef } from '@angular/core';
import { AttachmentDownloadService } from '../../shared/service/attachment-download.service';
import { Base64DirectLinkService } from '../../shared/service/base64-direct-link.service';
import { FileBlobData } from '../../../proxy/cmsservice';
import { AttachmentFileDto } from '../../shared/model/models';

export enum PreviewModeEnum {
  Image,
  Link,
}

@Component({
  selector: 'app-base64-file-preview',
  templateUrl: './base64-file-preview.component.html',
  styleUrls: ['./base64-file-preview.component.scss'],
})
export class Base64FilePerviewComponent implements OnChanges, OnDestroy {

  @ContentChild('defaultImage') defaultImage: TemplateRef<any>;
  @ContentChild('customLinkTemplate') customLinkTemplate: TemplateRef<any>;
  @Input() entity: string;
  @Input() base64File: AttachmentFileDto;
  @Input() previewClass: string;
  _base64File: FileBlobData;
  imageUrl: string;
  @Input() previewMode: PreviewModeEnum;
  PreviewModeEnum = PreviewModeEnum;
  isLoadingImage = false;
  sub$: Subscription;

  constructor(
    private _directLinkService: Base64DirectLinkService,
    private _cd: ChangeDetectorRef,

  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.imageUrl = undefined;
    this.downloadImage();
  }
  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }

  downloadImage() {
    this._base64File = null;
    this._downloadImage();
  }

  downloadFile() {
    if (this._base64File) {
      AttachmentDownloadService.saveFile(this._base64File.data, this._base64File.filename);
    } else {
        this.sub$ = this.base64File.base64File.subscribe(result => {
          this._base64File = result;
          AttachmentDownloadService.saveFile(this._base64File.data, this._base64File.filename);
        });
    }
  }
  retryCount = 0;
  error(event: any){
    this.retryCount++;
    if(this.retryCount == 3){
      this.imageUrl = undefined;
      this._cd.markForCheck();
      return;
    }
    if(event.type == 'error'){
      this._directLinkService.clear(this.base64File.moduleName);
      this._downloadImage();
    }
  }
  private _downloadImage(){
    this.imageUrl = undefined;
    this._cd.markForCheck();
    if (this.base64File &&  this.previewMode === PreviewModeEnum.Image) {
      this._directLinkService.getImageUrlLink(this.base64File.moduleName, this.base64File.attachmentId, this.base64File.entity, this.base64File.isAttachmentDetails).then(res => {
        this.imageUrl = res;
        this._cd.markForCheck();
      })
    }
  }
}
