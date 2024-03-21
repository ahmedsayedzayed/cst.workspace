import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { FAQAdminDto, FAQCreateDto, FAQUpdateDto, GetFAQSInput } from '../../../cms/faqs/dto/admin/models';
import type { FAQDto, FaqPublicDto } from '../../../cms/faqs/dto/common/models';

@Injectable({
  providedIn: 'root',
})
export class FAQService {
  apiName = 'CMSService';
  

  create = (input: FAQCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FAQAdminDto>({
      method: 'POST',
      url: '/api/cms-service/FAQs',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/FAQs/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FAQAdminDto>({
      method: 'GET',
      url: `/api/cms-service/FAQs/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetFAQSInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<FAQDto>>({
      method: 'GET',
      url: '/api/cms-service/FAQs',
      params: { filterText: input.filterText, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListPublic = (input: GetFAQSInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<FaqPublicDto>>({
      method: 'GET',
      url: '/api/cms-service/FAQs/GetListPublicAsync',
      params: { filterText: input.filterText, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: FAQUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FAQAdminDto>({
      method: 'PUT',
      url: `/api/cms-service/FAQs/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
