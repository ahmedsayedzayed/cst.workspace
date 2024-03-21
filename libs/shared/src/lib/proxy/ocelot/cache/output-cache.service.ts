import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class OutputCacheService {
  apiName = 'Default';
  

  deleteByRegion = (region: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'DELETE',
      url: `/outputcache/${region}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
