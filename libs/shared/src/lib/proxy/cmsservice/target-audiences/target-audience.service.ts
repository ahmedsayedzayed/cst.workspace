import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LookupRequestDto, TargetAudienceLookUpDto } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class TargetAudienceService {
  apiName = 'CMSService';
  

  getCstDepartmentsByGeneralDepartmentIdByGeneralDepartmentIdAndInput = (generalDepartmentId: string, input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TargetAudienceLookUpDto>>({
      method: 'GET',
      url: '/api/cms-service/target-audiences/GetCstDepartmentsByGeneralDepartmentId',
      params: { generalDepartmentId, filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getCstGeneralDepartmentsBySectorIdBySectorIdAndInput = (sectorId: string, input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TargetAudienceLookUpDto>>({
      method: 'GET',
      url: '/api/cms-service/target-audiences/GetCstGeneralDepartmentsBySectorId',
      params: { sectorId, filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getCstSectorLookUpByInput = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TargetAudienceLookUpDto>>({
      method: 'GET',
      url: '/api/cms-service/target-audiences/GetCstSectorLookUp',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
