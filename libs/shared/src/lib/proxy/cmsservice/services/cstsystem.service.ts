import type { CSTSystemCreateDto, CSTSystemDto, CSTSystemUpdateDto, GetCSTSystemsInput } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CSTSystemService {
  apiName = 'CMSService';
  

  create = (input: CSTSystemCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CSTSystemDto>({
      method: 'POST',
      url: '/api/cms-service/c-sTSystems',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/c-sTSystems/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CSTSystemDto>({
      method: 'GET',
      url: `/api/cms-service/c-sTSystems/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetCSTSystemsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CSTSystemDto>>({
      method: 'GET',
      url: '/api/cms-service/c-sTSystems',
      params: { filterText: input.filterText, nameAr: input.nameAr, nameEn: input.nameEn, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CSTSystemUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CSTSystemDto>({
      method: 'PUT',
      url: `/api/cms-service/c-sTSystems/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
