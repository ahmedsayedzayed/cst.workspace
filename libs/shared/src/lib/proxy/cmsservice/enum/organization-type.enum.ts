import { mapEnumToOptions } from '@abp/ng.core';

export enum OrganizationType {
  GegeneralDepartment = 1,
  Department = 2,
  Sector = 3,
}

export const organizationTypeOptions = mapEnumToOptions(OrganizationType);
