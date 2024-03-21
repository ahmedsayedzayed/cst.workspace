import { mapEnumToOptions } from '@abp/ng.core';

export enum RoleActionType {
  Assign = 1,
  Remove = 2,
}

export const roleActionTypeOptions = mapEnumToOptions(RoleActionType);
