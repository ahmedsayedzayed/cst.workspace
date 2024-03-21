import { Observable } from 'rxjs';
// import { FileBinaryData } from "./proxy-model";

import { FileBlobData } from "../../../proxy/cmsservice";
import { AttachmentDetailDto } from "./proxy-model";

export class AttachmentUpdatedDto {
    filesCount = 0;
    files = [];
    isAfterRefresh = false;
}

export interface AttachmentDetailDtoExtend extends AttachmentDetailDto {
    isImageFile?: boolean;
    directLink?: AttachmentFileDto;
    // base64File?: FileBlobData;
}

export interface SelectEvent {
    currentFiles?: FileList;
    files: FileList;
    originalEvent: Event;
}



export interface AttachmentFileDto {
    attachmentId: number;
    moduleName: string;
    entity: string;
    base64File?: Observable<FileBlobData>;
    isAttachmentDetails: boolean;
}