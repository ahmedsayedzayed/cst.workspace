import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { PopularTagDto, TagDto } from '../../tags/models';

@Injectable({
  providedIn: 'root',
})
export class TagPublicService {
  apiName = 'CmsKitPublic';
  

  getAllRelatedTags = (entityType: string, entityId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TagDto[]>({
      method: 'GET',
      url: `/api/cms-kit-public/tags/${entityType}/${entityId}`,
    },
    { apiName: this.apiName,...config });
  

  getPopularTags = (entityType: string, maxCount: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PopularTagDto[]>({
      method: 'GET',
      url: `/api/cms-kit-public/tags/popular/${entityType}/${maxCount}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
