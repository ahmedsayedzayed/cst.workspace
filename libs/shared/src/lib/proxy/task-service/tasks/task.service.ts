import type { BaseResponseDto, ExcuteActionDto, GetMyTeamTasksInput, GetTasksInput, GetToDoTasksInput, HomePageTaskCountDto, LookupRequestDto, LookupResultDto, LookupResultGuid, ReassignTaskDto, RequestStatusDto, ServiceCategoryLookupDto, TaskListCountDto, TaskWithNavigationPropertiesDto, ToDoTaskCountDto, ToDoTaskCreateDto, ToDoTaskDto, ToDoTaskUpdateDto, UserInfoDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiName = 'TaskService';
  

  addToDoTaskByInput = (input: ToDoTaskCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ToDoTaskDto>({
      method: 'POST',
      url: '/api/task-service/tasks/add-todo-task',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  complete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: `/api/task-service/tasks/complete/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteToDo = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'DELETE',
      url: `/api/task-service/tasks/delete-todo-task/${id}`,
    },
    { apiName: this.apiName,...config });
  

  excuteActionByInput = (input: ExcuteActionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BaseResponseDto>({
      method: 'POST',
      url: '/api/task-service/tasks/excute-action',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getHomePageTasksCount = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, HomePageTaskCountDto>({
      method: 'GET',
      url: '/api/task-service/tasks/get-home-page-tasks-counts',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetTasksInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TaskWithNavigationPropertiesDto>>({
      method: 'GET',
      url: '/api/task-service/tasks',
      params: { filterText: input.filterText, requestNo: input.requestNo, taskNo: input.taskNo, taskName: input.taskName, requestedBy: input.requestedBy, assignDateMin: input.assignDateMin, assignDateMax: input.assignDateMax, serviceName: input.serviceName, categoryId: input.categoryId, subCategoryId: input.subCategoryId, status: input.status, isCompletedTasks: input.isCompletedTasks, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getMyTeamList = (input: GetMyTeamTasksInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<TaskWithNavigationPropertiesDto>>({
      method: 'GET',
      url: '/api/task-service/tasks/get-myTeam-task-list',
      params: { assignedTo: input.assignedTo, filterText: input.filterText, requestNo: input.requestNo, taskNo: input.taskNo, taskName: input.taskName, requestedBy: input.requestedBy, assignDateMin: input.assignDateMin, assignDateMax: input.assignDateMax, serviceName: input.serviceName, categoryId: input.categoryId, subCategoryId: input.subCategoryId, status: input.status, isCompletedTasks: input.isCompletedTasks, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getRequestStatusByRequestNo = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestStatusDto>({
      method: 'GET',
      url: '/api/task-service/tasks/request-status',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });
  

  getTasksListCount = (input: GetTasksInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TaskListCountDto[]>({
      method: 'GET',
      url: '/api/task-service/tasks/get-tasks-list-counts',
      params: { filterText: input.filterText, requestNo: input.requestNo, taskNo: input.taskNo, taskName: input.taskName, requestedBy: input.requestedBy, assignDateMin: input.assignDateMin, assignDateMax: input.assignDateMax, serviceName: input.serviceName, categoryId: input.categoryId, subCategoryId: input.subCategoryId, status: input.status, isCompletedTasks: input.isCompletedTasks, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getTeamTasksListCount = (input: GetMyTeamTasksInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TaskListCountDto[]>({
      method: 'GET',
      url: '/api/task-service/tasks/get-team-tasks-list-counts',
      params: { assignedTo: input.assignedTo, filterText: input.filterText, requestNo: input.requestNo, taskNo: input.taskNo, taskName: input.taskName, requestedBy: input.requestedBy, assignDateMin: input.assignDateMin, assignDateMax: input.assignDateMax, serviceName: input.serviceName, categoryId: input.categoryId, subCategoryId: input.subCategoryId, status: input.status, isCompletedTasks: input.isCompletedTasks, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getToDo = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ToDoTaskDto>({
      method: 'GET',
      url: `/api/task-service/tasks/get-todo-task/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getToDoTaskList = (input: GetToDoTasksInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ToDoTaskDto>>({
      method: 'GET',
      url: '/api/task-service/tasks/get-toDo-task-list',
      params: { filterText: input.filterText, title: input.title, assignedBy: input.assignedBy, assignedTo: input.assignedTo, taskStartDateFrom: input.taskStartDateFrom, taskStartDateTo: input.taskStartDateTo, taskEndDateFrom: input.taskEndDateFrom, taskEndDateTo: input.taskEndDateTo, status: input.status, assignee: input.assignee, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getToDoTaskListCount = (input: GetToDoTasksInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ToDoTaskCountDto>({
      method: 'GET',
      url: '/api/task-service/tasks/get-toDo-task-list-counts',
      params: { filterText: input.filterText, title: input.title, assignedBy: input.assignedBy, assignedTo: input.assignedTo, taskStartDateFrom: input.taskStartDateFrom, taskStartDateTo: input.taskStartDateTo, taskEndDateFrom: input.taskEndDateFrom, taskEndDateTo: input.taskEndDateTo, status: input.status, assignee: input.assignee, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getUserInfo = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, UserInfoDto>({
      method: 'GET',
      url: '/api/task-service/tasks/user-Info',
    },
    { apiName: this.apiName,...config });
  

  reassignTask = (input: ReassignTaskDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BaseResponseDto>({
      method: 'POST',
      url: '/api/task-service/tasks/task-reassign',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  serviceCategoryLookUpByInput = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ServiceCategoryLookupDto>>({
      method: 'GET',
      url: '/api/task-service/tasks/ServiceCategoryLookUp',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  serviceLookUpByServiceSubCategoryIdAndInput = (serviceSubCategoryId: string, input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupResultGuid>>({
      method: 'GET',
      url: '/api/task-service/tasks/ServiceLookUp',
      params: { serviceSubCategoryId, filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  serviceSubCategoryLookUpByServiceCategoryIdAndInput = (serviceCategoryId: string, input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupResultGuid>>({
      method: 'GET',
      url: '/api/task-service/tasks/ServiceSubCategoryLookUp',
      params: { serviceCategoryId, filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  unComplete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: `/api/task-service/tasks/uncomplete/${id}`,
    },
    { apiName: this.apiName,...config });
  

  updateToDo = (id: number, input: ToDoTaskUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ToDoTaskDto>({
      method: 'PUT',
      url: `/api/task-service/tasks/update-todo-task/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  userDepartmentsLookupByInput = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupResultGuid>>({
      method: 'GET',
      url: '/api/task-service/tasks/UserDepartmentsLookup',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  usersLookUpByDepartmentIdAndInput = (departmentId: string, input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupResultDto>>({
      method: 'GET',
      url: '/api/task-service/tasks/UsersLookUp',
      params: { departmentId, filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
