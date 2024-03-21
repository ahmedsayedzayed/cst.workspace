import type { ReactionWithSelectionDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { ListResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReactionPublicService {
  apiName = 'CmsKitPublic';
  

  create = (entityType: string, entityId: string, reaction: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/cms-kit-public/reactions/${entityType}/${entityId}/${reaction}`,
    },
    { apiName: this.apiName,...config });
  

  delete = (entityType: string, entityId: string, reaction: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-public/reactions/${entityType}/${entityId}/${reaction}`,
    },
    { apiName: this.apiName,...config });
  

  getForSelection = (entityType: string, entityId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<ReactionWithSelectionDto>>({
      method: 'GET',
      url: `/api/cms-kit-public/reactions/${entityType}/${entityId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
