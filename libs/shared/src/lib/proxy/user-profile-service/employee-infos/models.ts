import type { EmployeeAvailabilityStatus } from '../enums/employee-availability-status.enum';
import type { PagedResultRequestDto } from '@abp/ng.core';

export interface EmployeeInfoPublicDto {
  username?: string;
  empFullName?: string;
  directManagerUserName?: string;
  directManagerName?: string;
  imageId?: number;
  jobTitle?: string;
  phoneNumber?: string;
  email?: string;
  mobileNumber?: string;
  buildingName?: string;
  sectionName?: string;
  officeNumber?: string;
  floorNumber?: string;
  sectorName?: string;
  generalDepartmentName?: string;
  departmentName?: string;
  availability?: EmployeeAvailabilityStatus;
  unavailableResone?: string;
  unavailableFrom?: string;
  unavailableTo?: string;
  delegatorName?: string;
  delegatorEmail?: string;
  delegatorMobile?: string;
  isRelated?: boolean;
}

export interface EmployeesDirectoryDto {
  imageId?: number;
  availability?: EmployeeAvailabilityStatus;
  username?: string;
  empFullName?: string;
  jobTitle?: string;
  sectorName?: string;
  generalDepartmentName?: string;
  departmentName?: string;
  email?: string;
  mobileNumber?: string;
  phoneNumber?: string;
  delegatorName?: string;
  delegatorEmail?: string;
  delegatorMobile?: string;
  unavailableReason?: string;
  unavailableFrom?: string;
  unavailableTo?: string;
  isRelated?: boolean;
}

export interface GetEmployeesDirectoryInput extends PagedResultRequestDto {
  filterText?: string;
  isRelated: boolean;
}

export interface UpdateEmployeeInfoDto {
  username: string;
  personNumber: string;
  personId: string;
  empFullNameEn: string;
  empFullNameAr: string;
  employeeType?: string;
  directManagerPersonNumber?: string;
  directManagerUserName?: string;
  directManagerNameEn?: string;
  directManagerNameAr?: string;
  grade?: string;
  jobTitleEn?: string;
  jobTitleAr?: string;
  positionNameEn?: string;
  positionNameAr?: string;
  jobNumber?: string;
  jobPhoneNumber?: string;
  jobEmail: string;
  mobileNumber?: string;
  personalEmail?: string;
  buildingNameEn?: string;
  buildingNameAr?: string;
  sectionName?: string;
  floorNumber?: string;
  officeNumber?: string;
  dateOfBirthGregorian?: string;
  masterOrgNameEn: string;
  masterOrgNameAr: string;
  sectorNameEn: string;
  sectorNameAr: string;
  generalDepartmentNameEn: string;
  generalDepartmentNameAr: string;
  departmentNameEn: string;
  departmentNameAr: string;
}
