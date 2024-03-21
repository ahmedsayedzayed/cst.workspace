
export interface IntegrationUserTasksDto {
  status?: string;
  data: UserTaskOutputDto[];
}

export interface TaskActionOutputDto {
  actionArName?: string;
  actionEnName?: string;
  actionCode?: string;
  actionComments?: string;
}

export interface UserTaskInputDto {
  systemCode: string;
  processCode?: string;
  requestNo?: string;
}

export interface UserTaskOutputDto {
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
  availableActions: TaskActionOutputDto[];
}
