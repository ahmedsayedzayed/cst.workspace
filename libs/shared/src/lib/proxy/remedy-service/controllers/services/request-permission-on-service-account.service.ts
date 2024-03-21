import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { RequestPermissionOnServiceAccountInputDto, RequestPermissionOnServiceAccountOutputDto } from '../../services/dtos/request-permission-on-service-account/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class RequestPermissionOnServiceAccountService {
  apiName = 'RemedyService';
  

  create = (input: RequestPermissionOnServiceAccountInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/request-permission-on-service-account',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestPermissionOnServiceAccountOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/request-permission-on-service-account',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
