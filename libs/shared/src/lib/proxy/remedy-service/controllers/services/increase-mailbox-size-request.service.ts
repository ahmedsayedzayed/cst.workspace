import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IncreaseMailboxSizeInputDto, IncreaseMailboxSizeOutputDto } from '../../services/dtos/increase-mailbox-size-service/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class IncreaseMailboxSizeRequestService {
  apiName = 'RemedyService';
  

  create = (input: IncreaseMailboxSizeInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/increase-mailbox-size',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IncreaseMailboxSizeOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/increase-mailbox-size',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
