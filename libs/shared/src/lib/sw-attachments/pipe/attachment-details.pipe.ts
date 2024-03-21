import { Pipe, PipeTransform } from "@angular/core";
import { AttachmentDownloadService } from "../shared/service/attachment-download.service";
import { AttachmentFileDto } from "../shared/model/models";

@Pipe({name: 'attachmentDetailsFile'})
export class AttachmentDetailsPipe implements PipeTransform {
    constructor(private _service: AttachmentDownloadService){}
    transform(value: any, ...args: any[]):AttachmentFileDto{
        if(!value){
            return ;
        }
        // return this._service.downloadAttachmentDetails(value, args[0], args[1])
        // .pipe(switchMap(e => of({moduleName: args[1], entity: args[0], attachmentId: value, base64File: e, isAttachmentDetails: true} as AttachmentFileDto)));
        return {
            moduleName: args[1], 
            entity: args[0], 
            attachmentId: value, 
            base64File: this._service.downloadAttachmentDetails(value, args[0], args[1]),
            isAttachmentDetails: true
        } as AttachmentFileDto;
    }
}