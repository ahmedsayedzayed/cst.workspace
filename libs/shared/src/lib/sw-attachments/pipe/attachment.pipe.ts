import { Pipe, PipeTransform } from "@angular/core";
import { AttachmentDownloadService } from "../shared/service/attachment-download.service";
import { Observable, of, switchMap } from "rxjs";
import { AttachmentFileDto } from "../shared/model/models";

@Pipe({ name: 'attachmentFile' })
export class AttachmentPipe implements PipeTransform {
    constructor(
        private _service: AttachmentDownloadService){}
    transform(value: any, ...args: any[]): AttachmentFileDto{
        if(!value){
            return ;
        }
        return {
            moduleName: args[1], 
            entity: args[0], 
            attachmentId: value, 
            base64File: this._service.downloadAttachment(value, args[0], args[1]),
            isAttachmentDetails: false
        } as AttachmentFileDto;
    }
}