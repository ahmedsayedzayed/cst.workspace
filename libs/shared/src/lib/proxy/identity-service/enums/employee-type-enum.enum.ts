import { mapEnumToOptions } from '@abp/ng.core';

export enum EmployeeTypeEnum {
  Official = 1,
  Contracter = 2,
}

export const employeeTypeEnumOptions = mapEnumToOptions(EmployeeTypeEnum);
