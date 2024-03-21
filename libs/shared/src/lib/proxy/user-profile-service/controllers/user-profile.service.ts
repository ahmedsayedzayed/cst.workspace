import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ContactInfoDto, EmployeeProfileDto, IdentificationCardDto, UpdateImageDto } from '../user-profile/dto/models';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  apiName = 'UserProfileService';
  

  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeProfileDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-profile',
    },
    { apiName: this.apiName,...config });
  

  getIdentificationCard = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, IdentificationCardDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-profile/IdentificationCard',
    },
    { apiName: this.apiName,...config });
  

  updateContactInfo = (info: ContactInfoDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/UserProfileService/user-profile/UpdateContactInfo',
      body: info,
    },
    { apiName: this.apiName,...config });
  

  updateImage = (input: UpdateImageDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: '/api/UserProfileService/user-profile/UpdateImage',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
