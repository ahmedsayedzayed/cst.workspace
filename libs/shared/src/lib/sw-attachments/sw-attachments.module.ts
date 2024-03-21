import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttachmentDetailsPipe } from './pipe/attachment-details.pipe';
import { AttachmentPipe } from './pipe/attachment.pipe';
import { FileSizePipe } from './pipe/file-size.pipe';
import { AttachmentComponent } from './components/attachment/attachment.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CoreModule } from '@abp/ng.core';
import { Base64FilePerviewComponent } from './components/base64-file-preview/base64-file-preview.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AttachmentDetailsPipe,AttachmentPipe,FileSizePipe,AttachmentComponent,Base64FilePerviewComponent],
  imports: [
    CoreModule,
    CommonModule,
    NgbTooltip,
    FileUploadModule
  ],
  exports:[AttachmentDetailsPipe,AttachmentPipe,FileSizePipe,AttachmentComponent,Base64FilePerviewComponent]
})
export class SwAttachmentsModule { }
