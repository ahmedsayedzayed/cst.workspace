import type { AttachmentDetailDto, GetAttachmentDetailsInput } from './attachment-dtos/models';
import type { GetMediasAdminInput, MediaAdminDetailsDto, MediaCreateDto, MediaExcelDownloadDto, MediaUpdateDto } from './medias/dto/admin/models';
import type { GetMediaHashtagsInput, MediaDto, MediaHashtagDto } from './medias/dto/common/models';
import type { GetMediasInput } from './medias/dto/public/models';
import type { MediaAdminListDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { FileContentResult, IActionResult } from '../../microsoft/asp-net-core/mvc/models';
import type { FileBlobData } from '../models';
import type { DownloadTokenResultDto } from '../shared/dto/admin/models';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  apiName = 'CMSService';
  

  attachment_Delete = (id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/medias/Attachment_DeleteAsync/${id}/${entity}`,
    },
    { apiName: this.apiName,...config });
  

  attachment_GetList = (input: GetAttachmentDetailsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AttachmentDetailDto>>({
      method: 'GET',
      url: '/api/cms-service/medias/Attachment_GetListAsync',
      params: { filterText: input.filterText, fileName: input.fileName, extension: input.extension, fileSizeMin: input.fileSizeMin, fileSizeMax: input.fileSizeMax, attachmentStatus: input.attachmentStatus, attachmentRef: input.attachmentRef, externalId: input.externalId, entity: input.entity, attachmentDetailFileId: input.attachmentDetailFileId, attachmentId: input.attachmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  create = (input: MediaCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaDto>({
      method: 'POST',
      url: '/api/cms-service/medias',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/medias/${id}`,
    },
    { apiName: this.apiName,...config });
  

  downloadAttachment = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileContentResult>({
      method: 'GET',
      url: '/api/cms-service/medias/DownloadAttachment',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentBlobByAttachmentIdAndEntity = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/medias/DownloadAttachmentBlob',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailBlobByIdAndEntity = (Id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/medias/DownloadAttachmentDetailBlob',
      params: { id: Id, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailImageByIdAndEntityAndDownloadToken = (Id: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/medias/DownloadAttachmentDetailImage',
      params: { id: Id, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentImageByAttachmentIdAndEntityAndDownloadToken = (attachmentId: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/medias/DownloadAttachmentImage',
      params: { attachmentId, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaAdminDetailsDto>({
      method: 'GET',
      url: `/api/cms-service/medias/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/cms-service/medias/download-token',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetMediasAdminInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MediaAdminListDto>>({
      method: 'GET',
      url: '/api/cms-service/medias',
      params: { mediaType: input.mediaType, filterText: input.filterText, minPublishDate: input.minPublishDate, maxPublishDate: input.maxPublishDate, mediaHashtags: input.mediaHashtags, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListAsExcelFile = (input: MediaExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>({
      method: 'GET',
      responseType: 'blob',
      url: '/api/cms-service/medias/as-excel-file',
      params: { downloadToken: input.downloadToken, mediaType: input.mediaType, filterText: input.filterText, minPublishDate: input.minPublishDate, maxPublishDate: input.maxPublishDate, mediaHashtags: input.mediaHashtags },
    },
    { apiName: this.apiName,...config });
  

  getMediaHashtagsByInput = (input: GetMediaHashtagsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MediaHashtagDto>>({
      method: 'GET',
      url: '/api/cms-service/medias/MediaHashtags',
      params: { filterText: input.filterText, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPublicList = (input: GetMediasInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MediaDto>>({
      method: 'GET',
      url: '/api/cms-service/medias/GetPublicListAsync',
      params: { mediaType: input.mediaType, filterText: input.filterText, mediaHashtags: input.mediaHashtags, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPublicMediaHashtagsByInput = (input: GetMediaHashtagsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<MediaHashtagDto>>({
      method: 'GET',
      url: '/api/cms-service/medias/PublicMediaHashtags',
      params: { filterText: input.filterText, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: MediaUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MediaDto>({
      method: 'PUT',
      url: `/api/cms-service/medias/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
