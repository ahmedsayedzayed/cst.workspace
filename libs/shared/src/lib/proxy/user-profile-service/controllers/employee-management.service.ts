import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { EmployeeCreateInputDto, EmployeeUpdateInputDto } from '../user-profile/dto/models';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService {
  apiName = 'UserProfileService';
  

  createEmployee = (input: EmployeeCreateInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeCreateInputDto>({
      method: 'POST',
      url: '/api/user-profile-service/employee-management/create-employee',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateEmployee = (input: EmployeeUpdateInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeUpdateInputDto>({
      method: 'POST',
      url: '/api/user-profile-service/employee-management/update-employee',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
