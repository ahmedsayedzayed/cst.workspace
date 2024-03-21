import type { CategoryStatDto, GetRequestsInput, GetUserRequestsServiceDto, RequestCreateDto, RequestDto, RequestUpdateDto, RequestUpdateStatusDto, RequestUrlDto, RequestWithNavigationPropertiesDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LookupCategoryDtoGuid, LookupDtoGuid, LookupRequestCascadeDto, LookupRequestDto } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  apiName = 'RequestService';
  

  create = (input: RequestCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestDto>({
      method: 'POST',
      url: '/api/request-service/requests',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/request-service/requests/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestDto>({
      method: 'GET',
      url: `/api/request-service/requests/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetRequestsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<RequestWithNavigationPropertiesDto>>({
      method: 'GET',
      url: '/api/request-service/requests',
      params: { filterText: input.filterText, requestNO: input.requestNO, serviceName: input.serviceName, requestStatusDetails: input.requestStatusDetails, serviceCategoryId: input.serviceCategoryId, serviceSubCategoryId: input.serviceSubCategoryId, requestStatusCode: input.requestStatusCode, startDateMin: input.startDateMin, startDateMax: input.startDateMax, endDateMin: input.endDateMin, endDateMax: input.endDateMax, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListStatisticsPublic = (input: GetRequestsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CategoryStatDto[]>({
      method: 'GET',
      url: '/api/request-service/requests/GetListStatisticsPublicAsync',
      params: { filterText: input.filterText, requestNO: input.requestNO, serviceName: input.serviceName, requestStatusDetails: input.requestStatusDetails, serviceCategoryId: input.serviceCategoryId, serviceSubCategoryId: input.serviceSubCategoryId, requestStatusCode: input.requestStatusCode, startDateMin: input.startDateMin, startDateMax: input.startDateMax, endDateMin: input.endDateMin, endDateMax: input.endDateMax, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getRequestUrlByRequestNumber = (requestNumber: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestUrlDto>({
      method: 'GET',
      url: '/api/request-service/requests/GetRequestUrl',
      params: { requestNumber },
    },
    { apiName: this.apiName,...config });
  

  getServiceCategoryLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupCategoryDtoGuid>>({
      method: 'GET',
      url: '/api/request-service/requests/ServiceCategoryLookup',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getServiceLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoGuid>>({
      method: 'GET',
      url: '/api/request-service/requests/service-lookup',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getServiceSubCategoryLookup = (input: LookupRequestCascadeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoGuid>>({
      method: 'GET',
      url: '/api/request-service/requests/ServiceSubCategoryLookup',
      params: { filter: input.filter, parentId: input.parentId, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getUserRequestsServiceBySystemCodeAndProcessCode = (systemCode: string, processCode: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetUserRequestsServiceDto>({
      method: 'GET',
      url: '/api/request-service/requests/GetUserRequests',
      params: { systemCode, processCode },
    },
    { apiName: this.apiName,...config });
  

  getWithNavigationProperties = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestWithNavigationPropertiesDto>({
      method: 'GET',
      url: `/api/request-service/requests/with-navigation-properties/${id}`,
    },
    { apiName: this.apiName,...config });
  

  update = (input: RequestUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestDto>({
      method: 'PUT',
      url: '/api/request-service/requests/UpdateAsync',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateStatus = (input: RequestUpdateStatusDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestDto>({
      method: 'PUT',
      url: '/api/request-service/requests/UpdateStatusAsync',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
