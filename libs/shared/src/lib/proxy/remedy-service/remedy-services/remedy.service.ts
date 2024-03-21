import type { GetRemedyServicesInput, RemedyServiceCreateDto, RemedyServiceDto, RemedyServiceUpdateDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemedyService {
  apiName = 'RemedyService';
  

  create = (input: RemedyServiceCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemedyServiceDto>({
      method: 'POST',
      url: '/api/remedy-service/remedy-services',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/remedy-service/remedy-services/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemedyServiceDto>({
      method: 'GET',
      url: `/api/remedy-service/remedy-services/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetRemedyServicesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<RemedyServiceDto>>({
      method: 'GET',
      url: '/api/remedy-service/remedy-services',
      params: { filterText: input.filterText, instanceID: input.instanceID, srd_Title: input.srd_Title, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  setServicesData = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/remedy-service/remedy-services/SetServicesData',
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: RemedyServiceUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemedyServiceDto>({
      method: 'PUT',
      url: `/api/remedy-service/remedy-services/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
