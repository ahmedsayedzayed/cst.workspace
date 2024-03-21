import type { EmployeeInfoPublicDto, EmployeesDirectoryDto, GetEmployeesDirectoryInput, UpdateEmployeeInfoDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeInfoService {
  apiName = 'UserProfileService';
  

  getEmployeeInfoPublic = (username: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeInfoPublicDto>({
      method: 'GET',
      url: `/api/UserProfileService/employee-infos/${username}`,
    },
    { apiName: this.apiName,...config });
  

  getEmployeesDirectory = (input: GetEmployeesDirectoryInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EmployeesDirectoryDto>>({
      method: 'GET',
      url: '/api/UserProfileService/employee-infos/employees-directory',
      params: { filterText: input.filterText, isRelated: input.isRelated, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  insertEmployees = (data: UpdateEmployeeInfoDto[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/UserProfileService/employee-infos/employees-insert',
      body: data,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
