import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { PageDto } from '../../contents/models';
import type { FilterLookupInputDto } from '../../models';
import type { PageLookupDto } from '../../pages/models';

@Injectable({
  providedIn: 'root',
})
export class PagesPublicService {
  apiName = 'CmsKitPublic';
  

  findBySlug = (slug: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PageDto>({
      method: 'GET',
      url: `/api/cms-kit-public/pages/${slug}`,
    },
    { apiName: this.apiName,...config });
  

  findDefaultHomePage = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PageDto>({
      method: 'GET',
      url: '/homePage',
    },
    { apiName: this.apiName,...config });
  

  getPageLookup = (input: FilterLookupInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PageLookupDto>>({
      method: 'GET',
      url: '/api/cms-kit-public/pages',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
