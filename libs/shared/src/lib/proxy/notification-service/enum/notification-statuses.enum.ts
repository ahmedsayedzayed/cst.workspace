import { mapEnumToOptions } from '@abp/ng.core';

export enum NotificationStatuses {
  New = 0,
  Enqueued = 1,
  Retry = 2,
  Sent = 3,
  Failed = 4,
}

export const notificationStatusesOptions = mapEnumToOptions(NotificationStatuses);
