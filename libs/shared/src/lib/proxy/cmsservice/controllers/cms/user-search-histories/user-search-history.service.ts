import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { UserSearchHistoryDto } from '../../../cms/user-search-histories/models';

@Injectable({
  providedIn: 'root',
})
export class UserSearchHistoryService {
  apiName = 'CMSService';
  

  clearAll = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/cms-service/UserSearchHistories',
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserSearchHistoryDto[]>({
      method: 'GET',
      url: '/api/cms-service/UserSearchHistories',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
