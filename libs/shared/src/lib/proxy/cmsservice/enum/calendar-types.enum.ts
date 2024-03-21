import { mapEnumToOptions } from '@abp/ng.core';

export enum CalendarTypes {
  Workshop = 3001,
  Forum = 3002,
  Course = 3003,
  Vacation = 3004,
  Other = 3005,
}

export const calendarTypesOptions = mapEnumToOptions(CalendarTypes);
