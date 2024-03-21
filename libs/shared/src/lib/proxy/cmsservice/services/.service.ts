import type { ServiceCategoryCreateDto, ServiceCategoryUpdateDto, ServiceCreateDto, ServiceExcelDownloadDto, ServiceSubCategoryCreateDto, ServiceSubCategoryUpdateDto, ServiceSubCategoryWithNavigationPropertiesDto, ServiceUpdateDto } from './dto/admin/admin-service-dtos/models';
import type { LookupSubCategoryRequestDto, ServiceAdminDto } from './dto/admin/models';
import type { ServiceCanChangeDefaultDto, ServiceWithNavigationPropertiesDto } from './dto/common/admin-dto/models';
import type { GetServiceCategoriesInput, GetServiceSubCategoriesInput } from './dto/common/common-service-dtos/models';
import type { ServiceCategoryListDto, ServiceDetailsInputDto, ServiceDetailsOutputDto, ServiceSubCategoryListDto } from './dto/common/models';
import type { ServiceCategoryStatisticsDto, ServiceDetailsPublicDto, ServicePublicDto, ServiceWithNavigationPropertiesPublicDto, UserQuickAccessServiceDto } from './dto/public/models';
import type { ServiceDto } from './dto/service-common/custom-service-dto/models';
import type { GetServicesInput, LookupServiceRequestDto, ServiceCategoryDto, ServiceSubCategoryDto } from './dto/service-common/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto, PagedResultRequestDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AttachmentDetailDto, GetAttachmentDetailsInput } from '../cms/attachment-dtos/models';
import type { FileContentResult, IActionResult } from '../../microsoft/asp-net-core/mvc/models';
import type { FileBlobData } from '../models';
import type { DownloadTokenResultDto } from '../shared/dto/admin/models';
import type { LookupDtoGuid, LookupRequestDto } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class Service {
  apiName = 'CMSService';
  

  addFavoriteServiceById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/cms-service/services/AddFavoriteService/${id}`,
    },
    { apiName: this.apiName,...config });
  

  attachment_Delete = (id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/services/Attachment_DeleteAsync/${id}/${entity}`,
    },
    { apiName: this.apiName,...config });
  

  attachment_GetList = (input: GetAttachmentDetailsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AttachmentDetailDto>>({
      method: 'GET',
      url: '/api/cms-service/services/Attachment_GetListAsync',
      params: { filterText: input.filterText, fileName: input.fileName, extension: input.extension, fileSizeMin: input.fileSizeMin, fileSizeMax: input.fileSizeMax, attachmentStatus: input.attachmentStatus, attachmentRef: input.attachmentRef, externalId: input.externalId, entity: input.entity, attachmentDetailFileId: input.attachmentDetailFileId, attachmentId: input.attachmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  canChangeDefaultServices = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceCanChangeDefaultDto>({
      method: 'GET',
      url: '/api/cms-service/services/CanChangeDefaultServices',
    },
    { apiName: this.apiName,...config });
  

  create = (input: ServiceCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceDto>({
      method: 'POST',
      url: '/api/cms-service/services',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createServicesCategories = (input: ServiceCategoryCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceCategoryDto>({
      method: 'POST',
      url: '/api/cms-service/services/CreateCategories',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createServicesSubCategories = (input: ServiceSubCategoryCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceSubCategoryDto>({
      method: 'POST',
      url: '/api/cms-service/services/CreateSubCategories',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/services/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteServicesCategories = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/services/DeleteCategories/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteServicesSubCategories = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/services/DeleteSubCategories/${id}`,
    },
    { apiName: this.apiName,...config });
  

  disable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: `/api/cms-service/services/disable/${id}`,
    },
    { apiName: this.apiName,...config });
  

  downloadAttachment = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileContentResult>({
      method: 'GET',
      url: '/api/cms-service/services/DownloadAttachment',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentBlobByAttachmentIdAndEntity = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/services/DownloadAttachmentBlob',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailBlobByIdAndEntity = (Id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/services/DownloadAttachmentDetailBlob',
      params: { id: Id, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailImageByIdAndEntityAndDownloadToken = (Id: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/services/DownloadAttachmentDetailImage',
      params: { id: Id, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentImageByAttachmentIdAndEntityAndDownloadToken = (attachmentId: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/services/DownloadAttachmentImage',
      params: { attachmentId, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  enable = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: `/api/cms-service/services/enable/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceDto>({
      method: 'GET',
      url: `/api/cms-service/services/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/cms-service/services/download-token',
    },
    { apiName: this.apiName,...config });
  

  getDurationLookup = (input: PagedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoGuid>>({
      method: 'GET',
      url: '/api/cms-service/services/duration-lookup',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getGetServiceDetailsByServiceDetails = (serviceDetails: ServiceDetailsInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceDetailsOutputDto>({
      method: 'GET',
      url: '/api/cms-service/services/get-service-details',
      params: { systemCode: serviceDetails.systemCode, processCode: serviceDetails.processCode },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetServicesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ServiceAdminDto>>({
      method: 'GET',
      url: '/api/cms-service/services',
      params: { filterText: input.filterText, serviceAr: input.serviceAr, serviceEn: input.serviceEn, durationMin: input.durationMin, durationMax: input.durationMax, status: input.status, serviceCategoryId: input.serviceCategoryId, serviceSubCategoryId: input.serviceSubCategoryId, getFavorite: input.getFavorite, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListAsExcelFile = (input: ServiceExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>({
      method: 'GET',
      responseType: 'blob',
      url: '/api/cms-service/services/as-excel-file',
      params: { downloadToken: input.downloadToken, filterText: input.filterText, serviceAr: input.serviceAr, serviceEn: input.serviceEn, durationMin: input.durationMin, durationMax: input.durationMax, status: input.status, serviceCategoryId: input.serviceCategoryId, serviceSubCategoryId: input.serviceSubCategoryId, getFavorite: input.getFavorite },
    },
    { apiName: this.apiName,...config });
  

  getListPublic = (input: GetServicesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ServicePublicDto>>({
      method: 'GET',
      url: '/api/cms-service/services/GetListPublicAsync',
      params: { filterText: input.filterText, serviceAr: input.serviceAr, serviceEn: input.serviceEn, durationMin: input.durationMin, durationMax: input.durationMax, status: input.status, serviceCategoryId: input.serviceCategoryId, serviceSubCategoryId: input.serviceSubCategoryId, getFavorite: input.getFavorite, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListStatistics = (input: GetServicesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceCategoryStatisticsDto[]>({
      method: 'GET',
      url: '/api/cms-service/services/GetListStatisticsAsync',
      params: { filterText: input.filterText, serviceAr: input.serviceAr, serviceEn: input.serviceEn, durationMin: input.durationMin, durationMax: input.durationMax, status: input.status, serviceCategoryId: input.serviceCategoryId, serviceSubCategoryId: input.serviceSubCategoryId, getFavorite: input.getFavorite, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPublic = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceDetailsPublicDto>({
      method: 'GET',
      url: `/api/cms-service/services/Public/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getPublicCategoriesList = (input: GetServiceCategoriesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ServiceCategoryListDto>>({
      method: 'GET',
      url: '/api/cms-service/services/GetCategoriesPublicList',
      params: { filterText: input.filterText, nameAr: input.nameAr, nameEn: input.nameEn, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getPublicServicesSubCategoriesList = (input: GetServiceSubCategoriesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ServiceSubCategoryListDto>>({
      method: 'GET',
      url: '/api/cms-service/services/GetSubCategoriesPublic',
      params: { filterText: input.filterText, nameAr: input.nameAr, nameEn: input.nameEn, serviceCategoryId: input.serviceCategoryId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSServicesCategories = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceCategoryDto>({
      method: 'GET',
      url: `/api/cms-service/services/GetCategories/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getServiceCategoryLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoGuid>>({
      method: 'GET',
      url: '/api/cms-service/services/service-category-lookup',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getServiceLookup = (input: LookupServiceRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoGuid>>({
      method: 'GET',
      url: '/api/cms-service/services/service-lookup',
      params: { filter: input.filter, status: input.status, serviceCategoryId: input.serviceCategoryId, serviceSubCategoryId: input.serviceSubCategoryId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getServicePublicLookup = (input: LookupServiceRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoGuid>>({
      method: 'GET',
      url: '/api/cms-service/services/service-lookup-public',
      params: { filter: input.filter, status: input.status, serviceCategoryId: input.serviceCategoryId, serviceSubCategoryId: input.serviceSubCategoryId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getServiceSubCategoryLookup = (input: LookupSubCategoryRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoGuid>>({
      method: 'GET',
      url: '/api/cms-service/services/service-sub-category-lookup',
      params: { filter: input.filter, serviceCategoryId: input.serviceCategoryId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getServicesCategoriesList = (input: GetServiceCategoriesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ServiceCategoryListDto>>({
      method: 'GET',
      url: '/api/cms-service/services/GetCategories',
      params: { filterText: input.filterText, nameAr: input.nameAr, nameEn: input.nameEn, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getServicesSubCategories = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceSubCategoryDto>({
      method: 'GET',
      url: `/api/cms-service/services/GetSubCategories/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getServicesSubCategoriesList = (input: GetServiceSubCategoriesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ServiceSubCategoryListDto>>({
      method: 'GET',
      url: '/api/cms-service/services/GetSubCategories',
      params: { filterText: input.filterText, nameAr: input.nameAr, nameEn: input.nameEn, serviceCategoryId: input.serviceCategoryId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getServicesSubCategoriesWithNavigationProperties = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceSubCategoryWithNavigationPropertiesDto>({
      method: 'GET',
      url: `/api/cms-service/services/GetSubCategoriesWithNavigation/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getSystemsLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoGuid>>({
      method: 'GET',
      url: '/api/cms-service/services/cstsystems-lookup',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getUserQuickAccessServiceList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserQuickAccessServiceDto[]>({
      method: 'GET',
      url: '/api/cms-service/services/QuickAccessServiceList',
    },
    { apiName: this.apiName,...config });
  

  getWithNavigationProperties = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceWithNavigationPropertiesDto>({
      method: 'GET',
      url: `/api/cms-service/services/with-navigation-properties/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getWithNavigationPropertiesPublic = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceWithNavigationPropertiesPublicDto>({
      method: 'GET',
      url: `/api/cms-service/services/with-navigation-Public-properties/${id}`,
    },
    { apiName: this.apiName,...config });
  

  removeFavoriteServiceById = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/cms-service/services/RemoveFavoriteService/${id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: ServiceUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceDto>({
      method: 'POST',
      url: `/api/cms-service/services/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateServicesCategories = (id: string, input: ServiceCategoryUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceCategoryDto>({
      method: 'PUT',
      url: `/api/cms-service/services/UpdateCategories/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateServicesSubCategories = (id: string, input: ServiceSubCategoryUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceSubCategoryDto>({
      method: 'PUT',
      url: `/api/cms-service/services/UpdateSubCategories/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateUserQuickAccessServiceList = (list: string[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/cms-service/services/QuickAccessServiceList',
      body: list,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
