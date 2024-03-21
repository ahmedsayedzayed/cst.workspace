import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AllowancesDetailsDto, AttendanceDto, GetAllowancesDetailsInput, GetAttendanceInput, GetMyTeamInput, GoalsListDto, HousingLoanDto, LoanDto, MyTeamStatisticsDto, RemoteBalanceDto, SalaryDto, TainingCoursesDto, TeamMemberDto, VacationsDto, WorkingHoursDto, YearlyEvaluationDto } from '../user-profile/dto/models';

@Injectable({
  providedIn: 'root',
})
export class UserIndicatorsService {
  apiName = 'UserProfileService';
  

  getAttendance = (input: GetAttendanceInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AttendanceDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetAttendance',
      params: { year: input.year, month: input.month },
    },
    { apiName: this.apiName,...config });
  

  getFinancialLoan = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, LoanDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetFinancialLoanAsync',
    },
    { apiName: this.apiName,...config });
  

  getGetAllowancesDetails = (input: GetAllowancesDetailsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AllowancesDetailsDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetAllowancesDetails',
      params: { year: input.year, month: input.month },
    },
    { apiName: this.apiName,...config });
  

  getHousingLoan = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, HousingLoanDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetHousingLoanAsync',
    },
    { apiName: this.apiName,...config });
  

  getMyTeamMembers = (obj: GetMyTeamInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TeamMemberDto[]>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetMyTeamMembers',
      params: { id: obj.id },
    },
    { apiName: this.apiName,...config });
  

  getMyTeamRoot = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, TeamMemberDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetMyTeamRoot',
    },
    { apiName: this.apiName,...config });
  

  getMyTeamStatistics = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, MyTeamStatisticsDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetMyTeamStatistics',
    },
    { apiName: this.apiName,...config });
  

  getSalary = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SalaryDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetSalaryAsync',
    },
    { apiName: this.apiName,...config });
  

  getTrainingCourses = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, TainingCoursesDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetTrainingCourses',
    },
    { apiName: this.apiName,...config });
  

  getWorkingHours = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, WorkingHoursDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetWorkingHours',
    },
    { apiName: this.apiName,...config });
  

  getWorkingRemotelyBalance = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemoteBalanceDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetWorkingRemotelyBalance',
    },
    { apiName: this.apiName,...config });
  

  getYearlyEvaluation = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, YearlyEvaluationDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetYearlyEvaluation',
    },
    { apiName: this.apiName,...config });
  

  getYearlyGoals = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, GoalsListDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetYearlyGoals',
    },
    { apiName: this.apiName,...config });
  

  getYearlyVacation = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, VacationsDto>({
      method: 'GET',
      url: '/api/UserProfileService/user-indicators/GetYearlyVacation',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
