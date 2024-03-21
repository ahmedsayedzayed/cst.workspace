import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../microsoft/asp-net-core/mvc/models';
import type { AttachmentDto, DownloadTokenResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class AttachmentService {
  apiName = 'RemedyService';
  

  downloadWorkInfoAttachment = (WorkInfoId: string, AttachmentIndex: number, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/remedy-service/attachments/DownloadWorkInfoAttachment',
      params: { workInfoId: WorkInfoId, attachmentIndex: AttachmentIndex, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  downloadWorkInfoAttachmentBase64 = (WorkInfoId: string, AttachmentIndex: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AttachmentDto>({
      method: 'GET',
      url: '/api/remedy-service/attachments/DownloadWorkInfoAttachmentBase64',
      params: { workInfoId: WorkInfoId, attachmentIndex: AttachmentIndex },
    },
    { apiName: this.apiName,...config });
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/remedy-service/attachments/GetDownloadToken',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
