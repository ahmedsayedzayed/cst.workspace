import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { GetSearchesInput, SearchDto } from '../../../cms/searches/models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiName = 'CMSService';
  

  getList = (input: GetSearchesInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SearchDto>>({
      method: 'GET',
      url: '/api/cms-service/searches',
      params: { filterText: input.filterText, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  refreshData = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/cms-service/searches/RefreshData',
    },
    { apiName: this.apiName,...config });
  

  refreshDataSoft = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/cms-service/searches/RefreshDataSoft',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
