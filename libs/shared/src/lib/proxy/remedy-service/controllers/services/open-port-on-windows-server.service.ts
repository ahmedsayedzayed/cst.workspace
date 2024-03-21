import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { OpenPortOnWindowsServerInputDto, OpenPortOnWindowsServerOutputDto } from '../../services/dtos/open-port-on-windows-server-service/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class OpenPortOnWindowsServerService {
  apiName = 'RemedyService';
  

  create = (input: OpenPortOnWindowsServerInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/open-portponWindows-server',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OpenPortOnWindowsServerOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/open-portponWindows-server',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
