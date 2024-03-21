import type { CreateUpdateRatingInput, CreateUpdateRatingWithCommentInput, RatingDto, RatingWithStarCountGeneralDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RatingPublicService {
  apiName = 'CmsKitPublic';
  

  create = (entityType: string, entityId: string, input: CreateUpdateRatingInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RatingDto>({
      method: 'PUT',
      url: `/api/cms-kit-public/ratings/${entityType}/${entityId}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  createWithComment = (entityType: string, entityId: string, input: CreateUpdateRatingWithCommentInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RatingDto>({
      method: 'PUT',
      url: `/api/cms-kit-public/ratings/ratingwithcomment/${entityType}/${entityId}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (entityType: string, entityId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-public/ratings/${entityType}/${entityId}`,
    },
    { apiName: this.apiName,...config });
  

  getCurrentUserRating = (entityType: string, entityId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, number>({
      method: 'GET',
      url: `/api/cms-kit-public/ratings/getcurrentuserrating/${entityType}/${entityId}`,
    },
    { apiName: this.apiName,...config });
  

  getGroupedStarCounts = (entityType: string, entityId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RatingWithStarCountGeneralDto>({
      method: 'GET',
      url: `/api/cms-kit-public/ratings/${entityType}/${entityId}`,
    },
    { apiName: this.apiName,...config });
  

  getGroupedStarCountsByEntity = (entityType: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RatingWithStarCountGeneralDto>({
      method: 'GET',
      url: `/api/cms-kit-public/ratings/getbyentity/${entityType}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
