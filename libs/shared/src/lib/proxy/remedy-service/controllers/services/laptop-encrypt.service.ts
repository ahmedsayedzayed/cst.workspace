import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LaptopEncryptInputDto, LaptopEncryptOutputDto } from '../../services/dtos/laptop-encrypt/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class LaptopEncryptService {
  apiName = 'RemedyService';
  

  create = (input: LaptopEncryptInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/LaptopEncrypt',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LaptopEncryptOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/LaptopEncrypt',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
