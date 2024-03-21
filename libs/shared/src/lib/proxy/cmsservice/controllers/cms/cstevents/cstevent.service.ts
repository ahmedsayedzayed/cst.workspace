import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AttachmentDetailDto, GetAttachmentDetailsInput } from '../../../cms/attachment-dtos/models';
import type { CSTEventCreateDto, CSTEventExcelDownloadDto, CSTEventUpdateDto } from '../../../cms/cstevents/dto/admin/models';
import type { CSTEventDto } from '../../../cms/cstevents/dto/common/models';
import type { GetMediaCenterAdminInput, MediaCenterAdminDto } from '../../../cms/media-center/dto/admin/models';
import type { MediaCenterListDto } from '../../../cms/media-center/dto/common/models';
import type { GetMediaCenterPublicInput, MediaCenterPublicDto } from '../../../cms/media-center/dto/public/models';
import type { FileContentResult, IActionResult } from '../../../../microsoft/asp-net-core/mvc/models';
import type { FileBlobData } from '../../../models';
import type { DownloadTokenResultDto } from '../../../shared/dto/admin/models';

@Injectable({
  providedIn: 'root',
})
export class CSTEventService {
  apiName = 'CMSService';
  

  attachment_Delete = (id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/CMS-service/CSTEvent/Attachment_DeleteAsync/${id}/${entity}`,
    },
    { apiName: this.apiName,...config });
  

  attachment_GetList = (input: GetAttachmentDetailsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AttachmentDetailDto>>({
      method: 'GET',
      url: '/api/CMS-service/CSTEvent/Attachment_GetListAsync',
      params: { filterText: input.filterText, fileName: input.fileName, extension: input.extension, fileSizeMin: input.fileSizeMin, fileSizeMax: input.fileSizeMax, attachmentStatus: input.attachmentStatus, attachmentRef: input.attachmentRef, externalId: input.externalId, entity: input.entity, attachmentDetailFileId: input.attachmentDetailFileId, attachmentId: input.attachmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  create = (input: CSTEventCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CSTEventDto>({
      method: 'POST',
      url: '/api/CMS-service/CSTEvent',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/CMS-service/CSTEvent/${id}`,
    },
    { apiName: this.apiName,...config });
  

  downloadAttachment = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileContentResult>({
      method: 'GET',
      url: '/api/CMS-service/CSTEvent/DownloadAttachment',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentBlobByAttachmentIdAndEntity = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/CMS-service/CSTEvent/DownloadAttachmentBlob',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailBlobByIdAndEntity = (Id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/CMS-service/CSTEvent/DownloadAttachmentDetailBlob',
      params: { id: Id, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailImageByIdAndEntityAndDownloadToken = (Id: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/CMS-service/CSTEvent/DownloadAttachmentDetailImage',
      params: { id: Id, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentImageByAttachmentIdAndEntityAndDownloadToken = (attachmentId: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/CMS-service/CSTEvent/DownloadAttachmentImage',
      params: { attachmentId, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaCenterAdminDto>({
      method: 'GET',
      url: `/api/CMS-service/CSTEvent/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/CMS-service/CSTEvent/download-token',
    },
    { apiName: this.apiName,...config });
  

  getLatest = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaCenterListDto>({
      method: 'GET',
      url: '/api/CMS-service/CSTEvent/GetLatest',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetMediaCenterAdminInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MediaCenterListDto>>({
      method: 'GET',
      url: '/api/CMS-service/CSTEvent',
      params: { filterText: input.filterText, title: input.title, content: input.content, imageAttachment: input.imageAttachment, attachmentId: input.attachmentId, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, eventDateMin: input.eventDateMin, eventDateMax: input.eventDateMax, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListAsExcelFile = (input: CSTEventExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>({
      method: 'GET',
      responseType: 'blob',
      url: '/api/CMS-service/CSTEvent/as-excel-file',
      params: { downloadToken: input.downloadToken, filterText: input.filterText, lang: input.lang, eventName: input.eventName, eventContent: input.eventContent, eventStartDateMin: input.eventStartDateMin, eventStartDateMax: input.eventStartDateMax, eventEndDateMin: input.eventEndDateMin, eventEndDateMax: input.eventEndDateMax, eventPublishDateMin: input.eventPublishDateMin, eventPublishDateMax: input.eventPublishDateMax, mainImageIdMin: input.mainImageIdMin, mainImageIdMax: input.mainImageIdMax, secondaryImagesIdMin: input.secondaryImagesIdMin, secondaryImagesIdMax: input.secondaryImagesIdMax },
    },
    { apiName: this.apiName,...config });
  

  getPublic = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaCenterPublicDto>({
      method: 'GET',
      url: `/api/CMS-service/CSTEvent/Public/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getPublicList = (input: GetMediaCenterPublicInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MediaCenterListDto>>({
      method: 'GET',
      url: '/api/CMS-service/CSTEvent/GetPublicList',
      params: { filterText: input.filterText, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: CSTEventUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CSTEventDto>({
      method: 'PUT',
      url: `/api/CMS-service/CSTEvent/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
