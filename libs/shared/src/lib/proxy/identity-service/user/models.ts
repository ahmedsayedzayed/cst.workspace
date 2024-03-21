import type { LookupResultGuid } from '../shared/models';
import type { RoleTypeEnum } from '../enums/role-type-enum.enum';
import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { EmployeeTypeEnum } from '../enums/employee-type-enum.enum';
import type { RoleActionType } from '../enums/role-action-type.enum';

export interface EmployeeGetDto {
  id?: string;
  username?: string;
  userId?: string;
  empFullNameEn?: string;
  empFullNameAr?: string;
  directManagerId?: string;
  directManagerNameEn?: string;
  directManagerNameAr?: string;
  directManagerUserName?: string;
  sectorId?: string;
  generalDepartmentId?: string;
  departmentId?: string;
  jobTitleEn?: string;
  jobTitleAr?: string;
  email?: string;
  phoneNumber?: string;
}

export interface LookupRoleResultGuidDto extends LookupResultGuid {
  roleType?: RoleTypeEnum;
}

export interface RuleDto {
  roleId?: string;
  roleName?: string;
  roleType: RoleTypeEnum;
  isAssignedToUser: boolean;
  lastAssignDate?: string;
  lastRemoveDate?: string;
}

export interface UserGetInputDto extends PagedAndSortedResultRequestDto {
  filterText?: string;
  sectorId?: string;
  generalDepartmentId?: string;
  departmentId?: string;
  ruleNames: string[];
  directorUserName?: string;
  employeeType?: EmployeeTypeEnum;
}

export interface UserGetPutputDto {
  id?: string;
  userName?: string;
  employeeNameAr?: string;
  employeeNameEn?: string;
  email?: string;
  jobTitle?: string;
  sector?: string;
  generalDepartment?: string;
  management?: string;
  directManager?: string;
  phoneNumber?: string;
  employeeType?: EmployeeTypeEnum;
  employeeTypeName?: string;
  roles?: string;
  roleAssignedDate?: string;
}

export interface UserRoleHistoryDto {
  roleName?: string;
  actionType: RoleActionType;
  actionDate?: string;
}

export interface UserRuleDto {
  userId?: string;
  rules: RuleDto[];
}
