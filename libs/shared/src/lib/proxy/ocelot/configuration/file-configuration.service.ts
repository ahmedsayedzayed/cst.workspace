import type { FileConfiguration } from './file/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class FileConfigurationService {
  apiName = 'Default';
  

  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/configuration',
    },
    { apiName: this.apiName,...config });
  

  postByFileConfiguration = (fileConfiguration: FileConfiguration, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/configuration',
      body: fileConfiguration,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
