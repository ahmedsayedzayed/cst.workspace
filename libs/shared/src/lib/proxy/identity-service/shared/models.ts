import type { PagedResultRequestDto } from '@abp/ng.core';
import type { EmployeeTypeEnum } from '../enums/employee-type-enum.enum';

export interface DownloadTokenResultDto {
  token?: string;
}

export interface LookupRequestDto extends PagedResultRequestDto {
  filter?: string;
}

export interface LookupResultGuid {
  id?: string;
  displayName?: string;
}

export interface LookupResultString {
  id?: string;
  displayName?: string;
}

export interface users_managementExcelDto {
  filterText?: string;
  sectorId?: string;
  generalDepartmentId?: string;
  departmentId?: string;
  ruleNames: string[];
  directorUserName?: string;
  employeeType?: EmployeeTypeEnum;
  downloadToken?: string;
}
