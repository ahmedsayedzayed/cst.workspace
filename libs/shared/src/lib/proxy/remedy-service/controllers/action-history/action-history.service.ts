import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ActionHistoryGetDto, ActionHistoryInputDto, WorkInfoGetDto } from '../../action-history/models';

@Injectable({
  providedIn: 'root',
})
export class ActionHistoryService {
  apiName = 'RemedyService';
  

  create = (input: ActionHistoryInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/remedy-service/action-history',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getActionHistoryList = (requestNo: string, input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ActionHistoryGetDto>>({
      method: 'GET',
      url: '/api/remedy-service/action-history/action-history-list',
      params: { requestNo, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getWorkInfoAttatchment = (workInfoId: string, order: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'GET',
      responseType: 'text',
      url: '/api/remedy-service/action-history/workInfo-Attatchment',
      params: { workInfoId, order },
    },
    { apiName: this.apiName,...config });
  

  getWorkInfoList = (requestNo: string, input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<WorkInfoGetDto>>({
      method: 'GET',
      url: '/api/remedy-service/action-history/workInfo-list',
      params: { requestNo, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
