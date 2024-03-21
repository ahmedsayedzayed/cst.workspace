import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { GetQuestionDataDto } from '../../question-choicess/models';
import type { ReuqesterDetailsDto } from '../../remedy-lookups/models';
import type { RemedyServiceQuestionDto } from '../../remedy-service-questions/models';
import type { LookupDto, LookupRequestDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class RemedyLookupService {
  apiName = 'RemedyService';
  

  getListControls = (instanceId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemedyServiceQuestionDto[]>({
      method: 'GET',
      url: '/api/remedy-service/remedy_lookups/list-controls-dynamic',
      params: { instanceId },
    },
    { apiName: this.apiName,...config });
  

  getRemedyLookupDataByLookupId = (lookupId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetQuestionDataDto[]>({
      method: 'GET',
      url: '/api/remedy-service/remedy_lookups/remedyLookupData',
      params: { lookupId },
    },
    { apiName: this.apiName,...config });
  

  getReuqesterDetails = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ReuqesterDetailsDto>({
      method: 'GET',
      url: '/api/remedy-service/remedy_lookups/reuqester-details',
    },
    { apiName: this.apiName,...config });
  

  getReuqesterDetailsByUserNameByUserName = (userName: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ReuqesterDetailsDto>({
      method: 'GET',
      url: '/api/remedy-service/remedy_lookups/reuqester-details-byUserName',
      params: { userName },
    },
    { apiName: this.apiName,...config });
  

  getUsersLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDto<string>>>({
      method: 'GET',
      url: '/api/remedy-service/remedy_lookups/UsersLookUp',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  setServicesQuestions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/remedy-service/remedy_lookups/SetServicesQuestions',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
