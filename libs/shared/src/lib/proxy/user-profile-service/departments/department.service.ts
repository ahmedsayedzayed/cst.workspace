import type { DepartmentDto, GetDepartmentsInput } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  apiName = 'UserProfileService';
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DepartmentDto>({
      method: 'GET',
      url: `/api/UserProfileService/departments/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetDepartmentsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DepartmentDto>>({
      method: 'GET',
      url: '/api/UserProfileService/departments',
      params: { filterText: input.filterText, nodeId: input.nodeId, nameEn: input.nameEn, nameAr: input.nameAr, departmentType: input.departmentType, parentNodeId: input.parentNodeId, parentId: input.parentId, managerNameEn: input.managerNameEn, managerNameAr: input.managerNameAr, managerUsername: input.managerUsername, managerEmployeeId: input.managerEmployeeId, managerPersonNumber: input.managerPersonNumber, managerPersonId: input.managerPersonId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
