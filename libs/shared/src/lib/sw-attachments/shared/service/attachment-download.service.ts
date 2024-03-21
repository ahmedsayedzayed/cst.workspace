import { Observable } from 'rxjs';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { FileBlobData } from '../../../proxy/cmsservice';
import { DownloadTokenResultDto } from '../../../proxy/cmsservice/shared/dto/admin';

@Injectable({
  providedIn: 'root'})
export class AttachmentDownloadService {
  private apiName = 'Default';
  constructor(
    private restService: RestService) {}
  downloadAttachmentDetails(
    attachmentDetailId: number | null | undefined,
    entity: string | null | undefined,
    moduleName: string | null | undefined): Observable<FileBlobData> {
    return this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: `/api/${moduleName}/DownloadAttachmentDetailBlob?id=${attachmentDetailId}&entity=${entity}`,
    },
    { apiName: this.apiName });
  }
  downloadAttachment(
    attachmentId: number | null | undefined,
    entity: string | null | undefined,
    moduleName: string | null | undefined): Observable<FileBlobData> {
    return this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: `/api/${moduleName}/DownloadAttachmentBlob?attachmentId=${attachmentId}&entity=${entity}`,
    },
    { apiName: this.apiName });
  }
  downloadAttachmentDetailsFile(
    attachmentDetailId: number | null | undefined,
    entity: string | null | undefined,
    moduleName: string | null | undefined){
    this.downloadAttachmentDetails(attachmentDetailId,entity,moduleName).subscribe(res => {
      AttachmentDownloadService.saveFile(res.data, res.filename);
    });
  }
  downloadAttachmentFile(
    attachmentId: number | null | undefined,
    entity: string | null | undefined,
    moduleName: string | null | undefined){
    this.downloadAttachment(attachmentId,entity,moduleName).subscribe(res => {
      AttachmentDownloadService.saveFile(res.data, res.filename);});
  }
  getDownloadToken(moduleName: string | null | undefined): Observable<DownloadTokenResultDto> {
    return this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: `/api/${moduleName}/GetDownloadToken`},
    { apiName: this.apiName });
  }
 

  static saveFile(base64File, filename) {
    const blob = this.b64toBlob(base64File);
    const msSaveOrOpenBlob = (window.navigator as any).msSaveOrOpenBlob;
    if (msSaveOrOpenBlob) {
      msSaveOrOpenBlob(blob, filename);
    } else {
      const a = document.createElement('a');
      document.body.appendChild(a);
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 0);
    }
  }

  private static b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  };

}
