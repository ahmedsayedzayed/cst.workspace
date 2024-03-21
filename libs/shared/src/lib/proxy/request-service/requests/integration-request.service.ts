import type { GetUserRequestsServiceDto, GetUserRequestsServiceInput, RequestCreateDto, RequestDto, RequestUpdateDto, RequestUpdateStatusDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntegrationRequestService {
  apiName = 'RequestService';
  

  create = (input: RequestCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestDto>({
      method: 'POST',
      url: '/api/request-service/integrationrequests',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getUserRequestsServiceByInput = (input: GetUserRequestsServiceInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetUserRequestsServiceDto>({
      method: 'GET',
      url: '/api/request-service/integrationrequests/GetUserRequests',
      params: { systemCode: input.systemCode, processCode: input.processCode },
    },
    { apiName: this.apiName,...config });
  

  update = (input: RequestUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestDto>({
      method: 'POST',
      url: '/api/request-service/integrationrequests/UpdateAsync',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateStatus = (input: RequestUpdateStatusDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestDto>({
      method: 'POST',
      url: '/api/request-service/integrationrequests/UpdateStatusAsync',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
