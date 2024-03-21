import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PreviewModeEnum } from '../../sw-attachments/components/base64-file-preview/base64-file-preview.component';
import { LocalizationService } from '@abp/ng.core';
import { AttachmentEntities } from '../../common-files/consts/attachment-entities.consts';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MediaPreviewComponent } from '../media-preview/media-preview.component';
import { MediaPreviewInput } from '../../common-files/models/media-preview-input.interface';
import { MediaTypes } from '../../proxy/cmsservice/enum/media-types.enum';

@Component({
  selector: 'app-view-attachment',
  templateUrl: './view-attachment.component.html',
  styleUrls: ['./view-attachment.component.scss']
})
export class ViewAttachmentComponent implements OnInit {
  PreviewModeEnum = PreviewModeEnum;
  AttachmentEntities = AttachmentEntities;
  isModalOpen:boolean
@Input() files
@Input() title:string;
@Input() entity:string;
@Input() moduleName:string;
MediaTypes = MediaTypes
showNavigationArrows = false;
showNavigationIndicators = false;
attachmentId:number[];
@ViewChild('preview', { static: true }) mediaPreviewComponent: MediaPreviewComponent;
modalOptions: NgbModalOptions = { size: 'lg', centered: true, windowClass: 'carsoual-modal', backdropClass: 'carsoual-backdrop'};
constructor(private _localizationService:LocalizationService){}
ngOnInit(): void {  
  this._arrangeFiles();
  this.showNavigationArrows = true;
	this.showNavigationIndicators = true;
  this.attachmentId = this.files.filter(s=>(s.extension !== "docx"&& s.extension !== "pdf"&& s.extension !== "doc")).map(e=>e.id)
}
private _arrangeFiles(){
  let image =this.files.map(x=>x).filter(e=>(e.extension =='png'||e.extension ==='jpg'||e.extension ==='jpeg'||e.extension ==='bmp'||e.extension ==='gif'||e.extension ==='tiff'||e.extension ==='tif'));
  let pdf = this.files.map(x=>x).filter(e=>(e.extension =='pdf'));
  let doc = this.files.map(x=>x).filter(e=>(e.extension =='doc'||e.extension =='docx'));
  this.files = [...image , ...pdf , ...doc];
}
public showMediaPreview(data,index){
  this.isModalOpen = true
  this.mediaPreviewComponent.showMediaPreview({
    mediaType: MediaTypes.Image,
    entity: this.entity,
    module: this.moduleName,
    title: this.title,
    images: this.attachmentId,
    selectedIndex: index
  } as MediaPreviewInput);
}
}


