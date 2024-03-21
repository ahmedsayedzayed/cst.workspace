import type { DeleteAllInputDto, GetWebNotificationsInput, SeenAllInputDto, WebNotificationDto, WebNotificationListDeleteDto, WebNotificationListSeenDto, WebNotificationListUnSeenDto, WebNotificationSeenDto, WebNotificationWithNavigationPropertiesDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebNotificationService {
  apiName = 'NotificationService';
  

  deleteAll = (input: DeleteAllInputDto, cancellationToken?: any, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/notification-service/web-notifications/delete-all',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  deleteList = (input: WebNotificationListDeleteDto, cancellationToken?: any, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/notification-service/web-notifications/delete-list',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetWebNotificationsInput, cancellationToken?: any, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<WebNotificationWithNavigationPropertiesDto>>({
      method: 'GET',
      url: '/api/notification-service/web-notifications',
      params: { isSeen: input.isSeen, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  seenAll = (input: SeenAllInputDto, cancellationToken?: any, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/notification-service/web-notifications/seen-all',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  setListSeen = (input: WebNotificationListSeenDto, cancellationToken?: any, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/notification-service/web-notifications/set-list-seen',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  setListUnSeen = (input: WebNotificationListUnSeenDto, cancellationToken?: any, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/notification-service/web-notifications/set-list-unseen',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  setSeen = (id: number, input: WebNotificationSeenDto, cancellationToken?: any, config?: Partial<Rest.Config>) =>
    this.restService.request<any, WebNotificationDto>({
      method: 'POST',
      url: `/api/notification-service/web-notifications/${id}/set-seen`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
