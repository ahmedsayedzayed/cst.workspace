import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { PermissionOnServerInputDto, PermissionOnServerOutputDto } from '../../services/dtos/permission-on-server-service/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class RequestPermissionOnServerService {
  apiName = 'RemedyService';
  

  create = (input: PermissionOnServerInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/request-permission-on-server',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PermissionOnServerOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/request-permission-on-server',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
