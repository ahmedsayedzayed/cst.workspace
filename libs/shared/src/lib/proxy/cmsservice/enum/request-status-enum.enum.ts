import { mapEnumToOptions } from '@abp/ng.core';

export enum RequestStatusEnum {
  InProgress = 1,
  Approved = 2,
  Rejected = 3,
}

export const requestStatusEnumOptions = mapEnumToOptions(RequestStatusEnum);
