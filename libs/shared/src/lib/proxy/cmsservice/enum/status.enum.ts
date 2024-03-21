import { mapEnumToOptions } from '@abp/ng.core';

export enum Status {
  Active = 1,
  Inactive = 2,
  Deleted = 3,
  Draft = 4,
}

export const statusOptions = mapEnumToOptions(Status);
