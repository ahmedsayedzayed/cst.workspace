import { mapEnumToOptions } from '@abp/ng.core';

export enum ToDoCompleteStatus {
  Complete = 1,
  UnComplete = 2,
}

export const toDoCompleteStatusOptions = mapEnumToOptions(ToDoCompleteStatus);
