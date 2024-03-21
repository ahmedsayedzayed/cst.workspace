import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { TaskCreateDto, UpdateTaskStatusDto } from '../../tasks/models';
import type { IntegrationUserTasksDto, UserTaskInputDto } from '../../tsak-integration/models';

@Injectable({
  providedIn: 'root',
})
export class TaskIntegrationService {
  apiName = 'TaskService';
  

  create = (input: TaskCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/task-service/portal-tasks/send-task',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getRequestPendingTaskUsersByRequestNo = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string[]>({
      method: 'GET',
      url: '/api/task-service/portal-tasks/GetRequestPendingTaskUsers',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });
  

  getUserTasks = (input: UserTaskInputDto, cancellationToken?: any, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IntegrationUserTasksDto>({
      method: 'GET',
      url: '/api/task-service/portal-tasks/GetUserTasks',
      params: { systemCode: input.systemCode, processCode: input.processCode, requestNo: input.requestNo },
    },
    { apiName: this.apiName,...config });
  

  updateTaskSatus = (input: UpdateTaskStatusDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/task-service/portal-tasks/update-task-status',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  updateTaskService = (input: TaskCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/task-service/portal-tasks/update-task-service',
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
