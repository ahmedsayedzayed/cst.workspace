import { mapEnumToOptions } from '@abp/ng.core';

export enum RoleTypeEnum {
  Content = 1,
  System = 2,
}

export const roleTypeEnumOptions = mapEnumToOptions(RoleTypeEnum);
