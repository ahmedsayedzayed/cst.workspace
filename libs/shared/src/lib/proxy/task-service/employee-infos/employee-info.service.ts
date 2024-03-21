import type { EmployeeInfoCreateDto, EmployeeInfoDto, EmployeeInfoUpdateDto, GetEmployeeInfosInput } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeInfoService {
  apiName = 'TaskService';
  

  create = (input: EmployeeInfoCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeInfoDto>({
      method: 'POST',
      url: '/api/task-service/employee-infos',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/task-service/employee-infos/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeInfoDto>({
      method: 'GET',
      url: `/api/task-service/employee-infos/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetEmployeeInfosInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EmployeeInfoDto>>({
      method: 'GET',
      url: '/api/task-service/employee-infos',
      params: { filterText: input.filterText, username: input.username, userId: input.userId, empFullNameEn: input.empFullNameEn, empFullNameAr: input.empFullNameAr, directManagerId: input.directManagerId, directManagerNameEn: input.directManagerNameEn, directManagerNameAr: input.directManagerNameAr, directManagerUserName: input.directManagerUserName, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: EmployeeInfoUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeInfoDto>({
      method: 'PUT',
      url: `/api/task-service/employee-infos/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
