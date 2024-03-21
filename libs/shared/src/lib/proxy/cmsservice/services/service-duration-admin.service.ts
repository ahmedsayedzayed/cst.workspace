import type { GetServiceDurationsInput, ServiceDurationCreateDto, ServiceDurationDto, ServiceDurationUpdateDto } from './dto/admin/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto, PagedResultRequestDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LookupDtoGuid } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ServiceDurationAdminService {
  apiName = 'CMSService';
  

  create = (input: ServiceDurationCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceDurationDto>({
      method: 'POST',
      url: '/api/cms-service/service-durations',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/service-durations/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceDurationDto>({
      method: 'GET',
      url: `/api/cms-service/service-durations/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDurationLookup = (input: PagedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoGuid>>({
      method: 'GET',
      url: '/api/cms-service/service-durations/duration-lookup',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetServiceDurationsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ServiceDurationDto>>({
      method: 'GET',
      url: '/api/cms-service/service-durations',
      params: { duration: input.duration, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: ServiceDurationUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ServiceDurationDto>({
      method: 'PUT',
      url: `/api/cms-service/service-durations/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
