import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { DownloadTokenResultDto, LookupRequestDto, LookupResultGuid, LookupResultString, users_managementExcelDto } from '../shared/models';
import type { EmployeeGetDto, LookupRoleResultGuidDto, RuleDto, UserGetInputDto, UserGetPutputDto, UserRoleHistoryDto, UserRuleDto } from '../user/models';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  apiName = 'IdentityService';
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/identity-service/user-management/GetDownloadTokenAsync',
    },
    { apiName: this.apiName,...config });
  

  getEmployee = (username: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeGetDto>({
      method: 'GET',
      url: '/api/identity-service/user-management/get-employee',
      params: { username },
    },
    { apiName: this.apiName,...config });
  

  getList = (input: UserGetInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<UserGetPutputDto>>({
      method: 'GET',
      url: '/api/identity-service/user-management/GetListAsync',
      params: { filterText: input.filterText, sectorId: input.sectorId, generalDepartmentId: input.generalDepartmentId, departmentId: input.departmentId, ruleNames: input.ruleNames, directorUserName: input.directorUserName, employeeType: input.employeeType, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListAsExcelFile = (input: users_managementExcelDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>({
      method: 'GET',
      responseType: 'blob',
      url: '/api/identity-service/user-management/as-excel-file',
      params: { filterText: input.filterText, sectorId: input.sectorId, generalDepartmentId: input.generalDepartmentId, departmentId: input.departmentId, ruleNames: input.ruleNames, directorUserName: input.directorUserName, employeeType: input.employeeType, downloadToken: input.downloadToken },
    },
    { apiName: this.apiName,...config });
  

  getListDepartments = (generalDepartmentId: string, input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupResultGuid>>({
      method: 'GET',
      url: '/api/identity-service/user-management/GetListDepartmentsAsync',
      params: { generalDepartmentId, filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListGenDepartments = (sectorId: string, input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupResultGuid>>({
      method: 'GET',
      url: '/api/identity-service/user-management/GetListGenDepartmentsAsync',
      params: { sectorId, filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListSectors = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupResultGuid>>({
      method: 'GET',
      url: '/api/identity-service/user-management/GetListSectorsAsync',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListUsers = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupResultString>>({
      method: 'GET',
      url: '/api/identity-service/user-management/GetListUsersAsync',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListrRules = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupRoleResultGuidDto>>({
      method: 'GET',
      url: '/api/identity-service/user-management/GetListRulesAsync',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getUserRules = (userId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RuleDto[]>({
      method: 'GET',
      url: '/api/identity-service/user-management/GetUserRulesAsync',
      params: { userId },
    },
    { apiName: this.apiName,...config });
  

  getUserRulesHistoryByUserIdAndRoleIdAndInput = (userId: string, roleId: string, input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<UserRoleHistoryDto>>({
      method: 'GET',
      url: '/api/identity-service/user-management/get-user-history',
      params: { userId, roleId, filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  saveUserRules = (input: UserRuleDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserRuleDto>({
      method: 'POST',
      url: '/api/identity-service/user-management/SaveUserRulesAsync',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
