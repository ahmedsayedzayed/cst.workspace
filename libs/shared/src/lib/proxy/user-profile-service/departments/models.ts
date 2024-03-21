import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { DepartmentType } from '../enums/department-type.enum';

export interface DepartmentDto extends EntityDto<string> {
  nodeId?: string;
  nameEn?: string;
  nameAr?: string;
  departmentType?: DepartmentType;
  parentNodeId?: string;
  parentId?: string;
  managerNameEn?: string;
  managerNameAr?: string;
  managerUsername?: string;
  managerEmployeeId?: string;
  managerPersonNumber?: string;
  managerPersonId?: string;
}

export interface GetDepartmentsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  nodeId?: string;
  nameEn?: string;
  nameAr?: string;
  departmentType?: DepartmentType;
  parentNodeId?: string;
  parentId?: string;
  managerNameEn?: string;
  managerNameAr?: string;
  managerUsername?: string;
  managerEmployeeId?: string;
  managerPersonNumber?: string;
  managerPersonId?: string;
}
