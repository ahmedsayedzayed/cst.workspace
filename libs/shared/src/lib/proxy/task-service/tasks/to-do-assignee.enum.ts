import { mapEnumToOptions } from '@abp/ng.core';

export enum ToDoAssignee {
  AssignedByMe = 1,
  AssignedToMe = 2,
}

export const toDoAssigneeOptions = mapEnumToOptions(ToDoAssignee);
