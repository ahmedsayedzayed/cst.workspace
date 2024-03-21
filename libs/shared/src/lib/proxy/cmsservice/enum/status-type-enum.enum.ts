import { mapEnumToOptions } from '@abp/ng.core';

export enum StatusTypeEnum {
  Create = 1,
  Delete = 2,
  Edit = 3,
}

export const statusTypeEnumOptions = mapEnumToOptions(StatusTypeEnum);
