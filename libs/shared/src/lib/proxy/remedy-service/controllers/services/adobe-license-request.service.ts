import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AdobeLicenseRequestInputDto, AdobeLicenseRequestOutputDto } from '../../services/dtos/adobe-license-service/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class AdobeLicenseRequestService {
  apiName = 'RemedyService';
  

  create = (input: AdobeLicenseRequestInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/adobeLicense',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AdobeLicenseRequestOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/adobeLicense',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
