import type { AttachmentDetailDto, GetAttachmentDetailsInput } from './attachment-dtos/models';
import type { GetMediaCenterAdminInput, MediaCenterAdminDto } from './media-center/dto/admin/models';
import type { MediaCenterListDto } from './media-center/dto/common/models';
import type { GetMediaCenterPublicInput, MediaCenterPublicDto } from './media-center/dto/public/models';
import type { NewsItemCreateDto, NewsItemExcelDownloadDto, NewsItemUpdateDto } from './news-items/dto/admin/models';
import type { NewsItemDto } from './news-items/dto/common/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { FileContentResult, IActionResult } from '../../microsoft/asp-net-core/mvc/models';
import type { FileBlobData } from '../models';
import type { DownloadTokenResultDto } from '../shared/dto/admin/models';

@Injectable({
  providedIn: 'root',
})
export class NewsItemService {
  apiName = 'CMSService';
  

  attachment_Delete = (id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/news-items/Attachment_DeleteAsync/${id}/${entity}`,
    },
    { apiName: this.apiName,...config });
  

  attachment_GetList = (input: GetAttachmentDetailsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AttachmentDetailDto>>({
      method: 'GET',
      url: '/api/cms-service/news-items/Attachment_GetListAsync',
      params: { filterText: input.filterText, fileName: input.fileName, extension: input.extension, fileSizeMin: input.fileSizeMin, fileSizeMax: input.fileSizeMax, attachmentStatus: input.attachmentStatus, attachmentRef: input.attachmentRef, externalId: input.externalId, entity: input.entity, attachmentDetailFileId: input.attachmentDetailFileId, attachmentId: input.attachmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  create = (input: NewsItemCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, NewsItemDto>({
      method: 'POST',
      url: '/api/cms-service/news-items',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/news-items/${id}`,
    },
    { apiName: this.apiName,...config });
  

  downloadAttachment = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileContentResult>({
      method: 'GET',
      url: '/api/cms-service/news-items/DownloadAttachment',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentBlobByAttachmentIdAndEntity = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/news-items/DownloadAttachmentBlob',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailBlobByIdAndEntity = (Id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/news-items/DownloadAttachmentDetailBlob',
      params: { id: Id, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailImageByIdAndEntityAndDownloadToken = (Id: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/news-items/DownloadAttachmentDetailImage',
      params: { id: Id, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentImageByAttachmentIdAndEntityAndDownloadToken = (attachmentId: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/news-items/DownloadAttachmentImage',
      params: { attachmentId, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaCenterAdminDto>({
      method: 'GET',
      url: `/api/cms-service/news-items/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/cms-service/news-items/download-token',
    },
    { apiName: this.apiName,...config });
  

  getLatest = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaCenterListDto>({
      method: 'GET',
      url: '/api/cms-service/news-items/GetLatest',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetMediaCenterAdminInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MediaCenterListDto>>({
      method: 'GET',
      url: '/api/cms-service/news-items',
      params: { filterText: input.filterText, title: input.title, content: input.content, imageAttachment: input.imageAttachment, attachmentId: input.attachmentId, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, eventDateMin: input.eventDateMin, eventDateMax: input.eventDateMax, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListAsExcelFile = (input: NewsItemExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>({
      method: 'GET',
      responseType: 'blob',
      url: '/api/cms-service/news-items/as-excel-file',
      params: { title: input.title, minDate: input.minDate, maxDate: input.maxDate, downloadToken: input.downloadToken },
    },
    { apiName: this.apiName,...config });
  

  getPublic = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaCenterPublicDto>({
      method: 'GET',
      url: `/api/cms-service/news-items/Public/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getPublicList = (input: GetMediaCenterPublicInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MediaCenterListDto>>({
      method: 'GET',
      url: '/api/cms-service/news-items/GetPublicList',
      params: { filterText: input.filterText, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: NewsItemUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, NewsItemDto>({
      method: 'PUT',
      url: `/api/cms-service/news-items/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
