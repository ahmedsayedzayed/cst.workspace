import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ProfileSettingInputDto } from '../../../cms/profile/models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  apiName = 'CMSService';
  

  getUserProfileSettings = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProfileSettingInputDto>({
      method: 'GET',
      url: '/api/cms-service/employees-profile/user-profile-settings',
    },
    { apiName: this.apiName,...config });
  

  saveUserProfileSettingsByProfileSetting = (profileSetting: ProfileSettingInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProfileSettingInputDto>({
      method: 'POST',
      url: '/api/cms-service/employees-profile/save-user-profile-settings',
      body: profileSetting,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
