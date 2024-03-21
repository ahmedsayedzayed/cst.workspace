import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface EmployeeInfoCreateDto {
  username: string;
  userId?: string;
  empFullNameEn: string;
  empFullNameAr: string;
  directManagerId?: string;
  directManagerNameEn: string;
  directManagerNameAr: string;
  directManagerUserName: string;
}

export interface EmployeeInfoDto extends FullAuditedEntityDto<string> {
  username?: string;
  userId?: string;
  empFullNameEn?: string;
  empFullNameAr?: string;
  directManagerId?: string;
  directManagerNameEn?: string;
  directManagerNameAr?: string;
  directManagerUserName?: string;
}

export interface EmployeeInfoUpdateDto {
  username: string;
  userId?: string;
  empFullNameEn: string;
  empFullNameAr: string;
  directManagerId?: string;
  directManagerNameEn: string;
  directManagerNameAr: string;
  directManagerUserName: string;
}

export interface GetEmployeeInfosInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  username?: string;
  userId?: string;
  empFullNameEn?: string;
  empFullNameAr?: string;
  directManagerId?: string;
  directManagerNameEn?: string;
  directManagerNameAr?: string;
  directManagerUserName?: string;
}
