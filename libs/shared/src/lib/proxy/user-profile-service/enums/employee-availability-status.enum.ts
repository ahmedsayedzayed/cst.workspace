import { mapEnumToOptions } from '@abp/ng.core';

export enum EmployeeAvailabilityStatus {
  Available = 1,
  Unavailable = 2,
  Remotely = 3,
}

export const employeeAvailabilityStatusOptions = mapEnumToOptions(EmployeeAvailabilityStatus);
