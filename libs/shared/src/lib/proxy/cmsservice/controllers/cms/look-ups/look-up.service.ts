import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LookupDtoGuid, LookupDtoInt, LookupDtoLong } from '../../../shared/models';
import type { GetUserDataDto } from '../../../target-audiences/models';

@Injectable({
  providedIn: 'root',
})
export class LookUpService {
  apiName = 'CMSService';
  

  cmsUsersLookUp = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, LookupDtoGuid[]>({
      method: 'GET',
      url: '/api/cms-service/LookUp/CmsUsersLookUp',
    },
    { apiName: this.apiName,...config });
  

  contactUsTypeLookUp = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, LookupDtoInt[]>({
      method: 'GET',
      url: '/api/cms-service/LookUp/ContactUsTypeLookUp',
    },
    { apiName: this.apiName,...config });
  

  getUserData = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetUserDataDto>({
      method: 'GET',
      url: '/api/cms-service/LookUp/GetUserData',
    },
    { apiName: this.apiName,...config });
  

  mainDepartmentLookUp = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, LookupDtoLong[]>({
      method: 'GET',
      url: '/api/cms-service/LookUp/MainDepartmentLookUp',
    },
    { apiName: this.apiName,...config });
  

  secondaryDepartmentLookUp = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, LookupDtoLong[]>({
      method: 'GET',
      url: '/api/cms-service/LookUp/SecondaryDepartmentLookUp',
    },
    { apiName: this.apiName,...config });
  

  sectionLookUp = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, LookupDtoLong[]>({
      method: 'GET',
      url: '/api/cms-service/LookUp/SectionLookUp',
    },
    { apiName: this.apiName,...config });
  

  sectorLookUp = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, LookupDtoLong[]>({
      method: 'GET',
      url: '/api/cms-service/LookUp/SectorsLookUp',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
