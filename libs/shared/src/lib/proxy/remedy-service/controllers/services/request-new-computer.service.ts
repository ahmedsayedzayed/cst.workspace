import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateRemedyDelegationDto, RemedyGetDelegationResponseDto, RemedyGetWorkInfoResponseDto } from '../../integration/dtos/models';
import type { RequestNewComputerInputDto, RequestNewComputerOutputDto } from '../../services/dtos/models';

@Injectable({
  providedIn: 'root',
})
export class RequestNewComputerService {
  apiName = 'RemedyService';
  

  cancelDelegation = (alternateId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/remedy-service/requestNewComputer/CancelDelegation',
      params: { alternateId },
    },
    { apiName: this.apiName,...config });
  

  create = (input: RequestNewComputerInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: '/api/remedy-service/requestNewComputer',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createDelegation = (input: CreateRemedyDelegationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemedyGetDelegationResponseDto>({
      method: 'POST',
      url: '/api/remedy-service/requestNewComputer/CreateDelegation',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestNewComputerOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/requestNewComputer',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });
  

  getUserDelegationsList = (userLogin: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemedyGetDelegationResponseDto[]>({
      method: 'GET',
      url: '/api/remedy-service/requestNewComputer/GetUserDelegationsList',
      params: { userLogin },
    },
    { apiName: this.apiName,...config });
  

  getWorkInfoWithAttachemnt = (InstanceId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemedyGetWorkInfoResponseDto[]>({
      method: 'GET',
      url: `/api/remedy-service/requestNewComputer/GetWorkInfo/${InstanceId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
