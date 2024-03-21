import type { EntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultRequestDto } from '@abp/ng.core';
import type { TaskDurationStatus } from './task-duration-status.enum';
import type { ToDoCompleteStatus } from './to-do-complete-status.enum';
import type { ToDoAssignee } from './to-do-assignee.enum';

export interface TaskActionCreateDto {
  actionArName?: string;
  actionEnName?: string;
  commentLabelAr?: string;
  commentLabelEn?: string;
  needComment: boolean;
  actionCode?: string;
}

export interface TaskCreateDto {
  systemCode?: string;
  processCode?: string;
  requestNo?: string;
  taskNo?: string;
  taskNameAr?: string;
  taskNameEn?: string;
  taskURL?: string;
  assignTo?: string;
  assignDate?: string;
  taskStatusCode?: string;
  availableActions: TaskActionCreateDto[];
}

export interface UpdateTaskStatusDto {
  systemCode?: string;
  processCode?: string;
  taskNo?: string;
  taskStatusCode?: string;
}

export interface BaseResponseDto {
  requestUUID?: string;
  statusCode?: string;
  statusDescription?: string;
  errorDetails?: string;
}

export interface ExcuteActionDto {
  taskId?: number;
  action: string;
  comment?: string;
}

export interface GetMyTeamTasksInput extends GetTasksInput {
  assignedTo?: string;
}

export interface GetTasksInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  requestNo?: string;
  taskNo?: string;
  taskName?: string;
  requestedBy?: string;
  assignDateMin?: string;
  assignDateMax?: string;
  serviceName?: string;
  categoryId?: string;
  subCategoryId?: string;
  status?: TaskDurationStatus;
  isCompletedTasks?: boolean;
}

export interface GetToDoTasksInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  title?: string;
  assignedBy?: string;
  assignedTo?: string;
  taskStartDateFrom?: string;
  taskStartDateTo?: string;
  taskEndDateFrom?: string;
  taskEndDateTo?: string;
  status?: ToDoCompleteStatus;
  assignee?: ToDoAssignee;
}

export interface HomePageTaskCountDto {
  totalMyTasksCount: number;
  totalMyTeamTasksCount: number;
}

export interface LookupRequestDto extends PagedResultRequestDto {
  filter?: string;
}

export interface LookupResultDto {
  id?: string;
  displayName?: string;
}

export interface LookupResultGuid {
  id?: string;
  displayName?: string;
}

export interface ReassignTaskDto {
  taskId?: number;
  userName: string;
  note?: string;
}

export interface RequestDto extends EntityDto<number> {
  requestNO?: string;
  createdByUsername?: string;
  requestStatusCode?: string;
}

export interface RequestStatusDto {
  requestNo?: string;
  requestStatus: number;
  requestStatusDetail?: string;
}

export interface ServiceCategoryDto extends EntityDto<string> {
  name?: string;
}

export interface ServiceCategoryLookupDto extends LookupResultGuid {
  icon?: string;
}

export interface ServiceDto extends EntityDto<string> {
  processCode?: string;
  taskDurationId?: string;
  serviceName?: string;
  serviceSubCategoryId?: string;
  serviceCategoryId?: string;
}

export interface ServiceSubCategoryDto extends EntityDto<string> {
  name?: string;
}

export interface TaskActionDto extends EntityDto<number> {
  actionName?: string;
  commentLabel?: string;
  needComment: boolean;
  actionCode?: string;
  taskId?: number;
}

export interface TaskDto extends FullAuditedEntityDto<number> {
  requestNo?: string;
  systemCode?: string;
  taskNo?: string;
  taskName?: string;
  taskURL?: string;
  requestedBy?: string;
  assignTo?: string;
  assignDate?: string;
  assignEndDate?: string;
  status?: TaskDurationStatus;
  actions: TaskActionDto[];
}

export interface TaskListCountDto {
  count: number;
  categoryId?: string;
}

export interface TaskUserDto {
  userName?: string;
  name?: string;
}

export interface TaskWithNavigationPropertiesDto {
  task: TaskDto;
  request: RequestDto;
  service: ServiceDto;
  serviceCategory: ServiceCategoryDto;
  serviceSubCategory: ServiceSubCategoryDto;
  assignTo: TaskUserDto;
  requestedBy: TaskUserDto;
}

export interface ToDoTaskCountDto {
  assignedByMe: number;
  assignedToMe: number;
}

export interface ToDoTaskCreateDto {
  title?: string;
  description?: string;
  assignedTo?: string;
  taskStartDate?: string;
  taskEndDate?: string;
}

export interface ToDoTaskDto extends FullAuditedEntityDto<number> {
  title?: string;
  description?: string;
  assignedBy?: string;
  assignedTo?: string;
  taskStartDate?: string;
  taskEndDate?: string;
  toDoStatus: number;
  assignToFullName?: string;
  ownerFullNAme?: string;
}

export interface ToDoTaskUpdateDto {
  title?: string;
  description?: string;
  assignedTo?: string;
  taskStartDate?: string;
  taskEndDate?: string;
  taskName?: string;
  status?: ToDoCompleteStatus;
}

export interface UserInfoDto {
  userName?: string;
  sector?: string;
  publicDepartment?: string;
}
