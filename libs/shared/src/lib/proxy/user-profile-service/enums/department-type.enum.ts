import { mapEnumToOptions } from '@abp/ng.core';

export enum DepartmentType {
  GegeneralDepartment = 1,
  Department = 2,
  Sector = 3,
  Building = 4,
}

export const departmentTypeOptions = mapEnumToOptions(DepartmentType);
