import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { RequestInputBaseDto } from '../../services/dtos/models';
import type { RequestBaseDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  apiName = 'RemedyService';
  

  cancelRequest = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/remedy-service/request/CancelRequest/${requestNo}`,
    },
    { apiName: this.apiName,...config });
  

  createRequest = (input: RequestInputBaseDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: '/api/remedy-service/request',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getRequest = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestBaseDto>({
      method: 'GET',
      url: '/api/remedy-service/request',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });
  

  reopenRequest = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/remedy-service/request/ReopenRequest/${requestNo}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
