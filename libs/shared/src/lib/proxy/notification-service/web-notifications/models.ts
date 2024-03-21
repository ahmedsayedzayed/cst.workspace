import type { AuditedEntityDto, PagedResultRequestDto } from '@abp/ng.core';
import type { NotificationStatuses } from '../enum/notification-statuses.enum';

export interface DeleteAllInputDto {
  concurrencyStamp?: string;
}

export interface GetWebNotificationsInput extends PagedResultRequestDto {
  isSeen?: boolean;
}

export interface SeenAllInputDto {
  concurrencyStamp?: string;
}

export interface WebNotificationDto extends AuditedEntityDto<number> {
  notificationStatus: NotificationStatuses;
  userId?: string;
  titleAr?: string;
  titleEn?: string;
  bodyAr?: string;
  bodyEn?: string;
  link?: string;
  isSeen: boolean;
  notificationTemplateId: number;
  concurrencyStamp?: string;
}

export interface WebNotificationListDeleteDto {
  ids: number[];
  concurrencyStamp?: string;
}

export interface WebNotificationListSeenDto {
  ids: number[];
  concurrencyStamp?: string;
}

export interface WebNotificationListUnSeenDto {
  ids: number[];
  concurrencyStamp?: string;
}

export interface WebNotificationSeenDto {
  concurrencyStamp?: string;
}

export interface WebNotificationWithNavigationPropertiesDto {
  id: number;
  title?: string;
  body?: string;
  link?: string;
  isSeen: boolean;
  creationTime?: string;
  creationTimeUTC?: string;
}
