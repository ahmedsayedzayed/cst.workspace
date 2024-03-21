import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AdvertismentAdminDto, AdvertismentCreateDto, AdvertismentUpdateDto } from '../../../cms/advertisment/dto/admin/models';
import type { AttachmentDetailDto, GetAttachmentDetailsInput } from '../../../cms/attachment-dtos/models';
import type { GetMediaCenterAdminInput, MediaCenterAdminDto } from '../../../cms/media-center/dto/admin/models';
import type { MediaCenterListDto } from '../../../cms/media-center/dto/common/models';
import type { GetMediaCenterPublicInput, MediaCenterPublicDto } from '../../../cms/media-center/dto/public/models';
import type { FileContentResult, IActionResult } from '../../../../microsoft/asp-net-core/mvc/models';
import type { FileBlobData } from '../../../models';
import type { DownloadTokenResultDto } from '../../../shared/dto/admin/models';

@Injectable({
  providedIn: 'root',
})
export class AdvertismentService {
  apiName = 'CMSService';
  

  attachment_Delete = (id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/advertisments/Attachment_DeleteAsync/${id}/${entity}`,
    },
    { apiName: this.apiName,...config });
  

  attachment_GetList = (input: GetAttachmentDetailsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AttachmentDetailDto>>({
      method: 'GET',
      url: '/api/cms-service/advertisments/Attachment_GetListAsync',
      params: { filterText: input.filterText, fileName: input.fileName, extension: input.extension, fileSizeMin: input.fileSizeMin, fileSizeMax: input.fileSizeMax, attachmentStatus: input.attachmentStatus, attachmentRef: input.attachmentRef, externalId: input.externalId, entity: input.entity, attachmentDetailFileId: input.attachmentDetailFileId, attachmentId: input.attachmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  create = (input: AdvertismentCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdvertismentAdminDto>({
      method: 'POST',
      url: '/api/cms-service/advertisments',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/advertisments/${id}`,
    },
    { apiName: this.apiName,...config });
  

  downloadAttachment = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileContentResult>({
      method: 'GET',
      url: '/api/cms-service/advertisments/DownloadAttachment',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentBlobByAttachmentIdAndEntity = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/advertisments/DownloadAttachmentBlob',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailBlobByIdAndEntity = (Id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/advertisments/DownloadAttachmentDetailBlob',
      params: { id: Id, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailImageByIdAndEntityAndDownloadToken = (Id: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/advertisments/DownloadAttachmentDetailImage',
      params: { id: Id, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentImageByAttachmentIdAndEntityAndDownloadToken = (attachmentId: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/advertisments/DownloadAttachmentImage',
      params: { attachmentId, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaCenterAdminDto>({
      method: 'GET',
      url: `/api/cms-service/advertisments/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/cms-service/advertisments/GetDownloadToken',
    },
    { apiName: this.apiName,...config });
  

  getLatest = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaCenterListDto>({
      method: 'GET',
      url: '/api/cms-service/advertisments/GetLatest',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetMediaCenterAdminInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MediaCenterListDto>>({
      method: 'GET',
      url: '/api/cms-service/advertisments',
      params: { filterText: input.filterText, title: input.title, content: input.content, imageAttachment: input.imageAttachment, attachmentId: input.attachmentId, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, eventDateMin: input.eventDateMin, eventDateMax: input.eventDateMax, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPublic = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaCenterPublicDto>({
      method: 'GET',
      url: `/api/cms-service/advertisments/Public/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getPublicList = (input: GetMediaCenterPublicInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MediaCenterListDto>>({
      method: 'GET',
      url: '/api/cms-service/advertisments/GetPublicList',
      params: { filterText: input.filterText, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: AdvertismentUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdvertismentAdminDto>({
      method: 'PUT',
      url: `/api/cms-service/advertisments/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
