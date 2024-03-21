import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ImprotantLinkCreateDto, ImprotantLinkDto, ImprotantLinkUpdateDto } from '../../../cms/improtant-links/dto/common/models';

@Injectable({
  providedIn: 'root',
})
export class ImprotantLinkService {
  apiName = 'CMSService';
  

  create = (input: ImprotantLinkCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ImprotantLinkDto>({
      method: 'POST',
      url: '/api/cms-service/important-links',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/important-links/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/cms-service/important-links',
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ImprotantLinkDto[]>({
      method: 'GET',
      url: '/api/cms-service/important-links',
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: ImprotantLinkUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ImprotantLinkDto>({
      method: 'PUT',
      url: `/api/cms-service/important-links/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
