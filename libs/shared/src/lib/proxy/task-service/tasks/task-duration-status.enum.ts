import { mapEnumToOptions } from '@abp/ng.core';

export enum TaskDurationStatus {
  Normal = 1,
  Late = 2,
}

export const taskDurationStatusOptions = mapEnumToOptions(TaskDurationStatus);
