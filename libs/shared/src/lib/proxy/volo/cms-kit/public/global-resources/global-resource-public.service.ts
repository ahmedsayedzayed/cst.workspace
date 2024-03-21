import type { GlobalResourceDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalResourcePublicService {
  apiName = 'CmsKitPublic';
  

  getGlobalScript = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, GlobalResourceDto>({
      method: 'GET',
      url: '/api/cms-kit-public/global-resources/script',
    },
    { apiName: this.apiName,...config });
  

  getGlobalStyle = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, GlobalResourceDto>({
      method: 'GET',
      url: '/api/cms-kit-public/global-resources/style',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
