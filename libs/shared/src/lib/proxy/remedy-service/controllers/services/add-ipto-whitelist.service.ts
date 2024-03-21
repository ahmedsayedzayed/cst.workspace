import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AddIPToWhitelistInputDto, AddIPToWhitelistOutputDto } from '../../services/dtos/add-ipto-whitelist/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class AddIPToWhitelistService {
  apiName = 'RemedyService';
  

  create = (input: AddIPToWhitelistInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/AddIPToWhitelist',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AddIPToWhitelistOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/AddIPToWhitelist',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
