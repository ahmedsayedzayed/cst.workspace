import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ExtendContractedAccountValidityInputDto, ExtendContractedAccountValidityOutputDto } from '../../services/dtos/extend-contracted-account-validity/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ExtendContractedAccountValidityService {
  apiName = 'RemedyService';
  

  create = (input: ExtendContractedAccountValidityInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/ExtendContractedAccountValidity',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ExtendContractedAccountValidityOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/ExtendContractedAccountValidity',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
