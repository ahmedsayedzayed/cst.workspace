import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { HostFileUpdateInputDto, HostFileUpdateOutputDto } from '../../services/dtos/host-file-update/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class HostFileUpdateService {
  apiName = 'RemedyService';
  

  create = (input: HostFileUpdateInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/HostFileUpdate',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, HostFileUpdateOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/HostFileUpdate',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
