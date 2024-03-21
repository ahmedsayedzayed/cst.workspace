import { mapEnumToOptions } from '@abp/ng.core';

export enum RequestStatusEnum {
  Draft = 1001,
  InProgress = 1002,
  NeedAction = 1003,
  Approved = 1004,
  Rejected = 1005,
  Closed = 1006,
  Cancelled = 1007,
  Completed = 1008,
}

export const requestStatusEnumOptions = mapEnumToOptions(RequestStatusEnum);
