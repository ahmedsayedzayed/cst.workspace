import type { GetOffersInput, OfferCreateDto, OfferDto, OfferUpdateDto, OfferWithNavigationPropertiesDto, OffersTypeStatDto } from './dto/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AttachmentDetailDto, GetAttachmentDetailsInput } from '../attachment-dtos/models';
import type { FileContentResult, IActionResult } from '../../../microsoft/asp-net-core/mvc/models';
import type { FileBlobData } from '../../models';
import type { DownloadTokenResultDto } from '../../shared/dto/admin/models';
import type { LookupDtoInt, LookupRequestDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  apiName = 'CMSService';
  

  attachment_Delete = (id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/offers/Attachment_DeleteAsync/${id}/${entity}`,
    },
    { apiName: this.apiName,...config });
  

  attachment_GetList = (input: GetAttachmentDetailsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AttachmentDetailDto>>({
      method: 'GET',
      url: '/api/cms-service/offers/Attachment_GetListAsync',
      params: { filterText: input.filterText, fileName: input.fileName, extension: input.extension, fileSizeMin: input.fileSizeMin, fileSizeMax: input.fileSizeMax, attachmentStatus: input.attachmentStatus, attachmentRef: input.attachmentRef, externalId: input.externalId, entity: input.entity, attachmentDetailFileId: input.attachmentDetailFileId, attachmentId: input.attachmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  create = (input: OfferCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OfferDto>({
      method: 'POST',
      url: '/api/cms-service/offers',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/offers/${id}`,
    },
    { apiName: this.apiName,...config });
  

  downloadAttachment = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileContentResult>({
      method: 'GET',
      url: '/api/cms-service/offers/DownloadAttachment',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentBlobByAttachmentIdAndEntity = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/offers/DownloadAttachmentBlob',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailBlobByIdAndEntity = (Id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/offers/DownloadAttachmentDetailBlob',
      params: { id: Id, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailImageByIdAndEntityAndDownloadToken = (Id: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/offers/DownloadAttachmentDetailImage',
      params: { id: Id, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentImageByAttachmentIdAndEntityAndDownloadToken = (attachmentId: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/offers/DownloadAttachmentImage',
      params: { attachmentId, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OfferDto>({
      method: 'GET',
      url: `/api/cms-service/offers/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/cms-service/offers/GetDownloadToken',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetOffersInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<OfferWithNavigationPropertiesDto>>({
      method: 'GET',
      url: '/api/cms-service/offers',
      params: { filterText: input.filterText, startDateMin: input.startDateMin, startDateMax: input.startDateMax, endDateMin: input.endDateMin, endDateMax: input.endDateMax, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, offerTypeId: input.offerTypeId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListPublic = (input: GetOffersInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<OfferWithNavigationPropertiesDto>>({
      method: 'GET',
      url: '/api/cms-service/offers/GetListPublicAsync',
      params: { filterText: input.filterText, startDateMin: input.startDateMin, startDateMax: input.startDateMax, endDateMin: input.endDateMin, endDateMax: input.endDateMax, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, offerTypeId: input.offerTypeId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListStatisticsPublic = (input: GetOffersInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OffersTypeStatDto[]>({
      method: 'GET',
      url: '/api/cms-service/offers/GetListStatisticsPublicAsync',
      params: { filterText: input.filterText, startDateMin: input.startDateMin, startDateMax: input.startDateMax, endDateMin: input.endDateMin, endDateMax: input.endDateMax, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, offerTypeId: input.offerTypeId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getOfferTypeLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoInt>>({
      method: 'GET',
      url: '/api/cms-service/offers/offer-type-lookup',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getWithNavigationProperties = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OfferWithNavigationPropertiesDto>({
      method: 'GET',
      url: `/api/cms-service/offers/with-navigation-properties/${id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: OfferUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OfferDto>({
      method: 'PUT',
      url: `/api/cms-service/offers/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
