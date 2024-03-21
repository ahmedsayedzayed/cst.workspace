import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AccessToDameeCreateDto, AccessToDameeRequestOutputDto } from '../../services/dtos/access-to-daame-service/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class AccessToDameeRequestService {
  apiName = 'RemedyService';
  

  create = (input: AccessToDameeCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/access-to-damee',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AccessToDameeRequestOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/access-to-damee',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
