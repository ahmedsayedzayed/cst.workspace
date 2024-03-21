import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { MdmAdditionInputDto, MdmAdditionOutputDto } from '../../services/dtos/mdm-addition-service/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class MdmAdditionRequestService {
  apiName = 'RemedyService';
  

  create = (input: MdmAdditionInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/mdm-addition',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, MdmAdditionOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/mdm-addition',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
