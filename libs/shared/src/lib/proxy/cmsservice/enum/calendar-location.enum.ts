import { mapEnumToOptions } from '@abp/ng.core';

export enum CalendarLocation {
  InSide = 3011,
  OutSide = 3012,
}

export const calendarLocationOptions = mapEnumToOptions(CalendarLocation);
