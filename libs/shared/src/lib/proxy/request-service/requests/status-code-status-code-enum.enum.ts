import { mapEnumToOptions } from '@abp/ng.core';

export enum StatusCode_StatusCodeEnum {
  Draft = 1001,
  InProgress = 1002,
  NeedAction = 1003,
  Approved = 1004,
  Rejected = 1005,
  Closed = 1006,
  Cancelled = 1007,
}

export const statusCode_StatusCodeEnumOptions = mapEnumToOptions(StatusCode_StatusCodeEnum);
