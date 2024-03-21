import { mapEnumToOptions } from '@abp/ng.core';

export enum AnnouncmentArchievingStatus {
  Read = 102,
  UnRead = 103,
}

export const announcmentArchievingStatusOptions = mapEnumToOptions(AnnouncmentArchievingStatus);
