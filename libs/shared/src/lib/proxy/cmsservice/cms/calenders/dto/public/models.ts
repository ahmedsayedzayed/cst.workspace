import type { CalendarTypes } from '../../../../enum/calendar-types.enum';
import type { CalendarLocation } from '../../../../enum/calendar-location.enum';

export interface CalendarDto {
  id: number;
  title?: string;
  content?: string;
  type: CalendarTypes;
  sectorName?: string;
  mainDepartmentName?: string;
  location?: CalendarLocation;
  city?: string;
  address?: string;
  start?: string;
  end?: string;
  publishDate?: string;
  lastModificationTime?: string;
}

export interface CalendarMonthlyDTO {
  id: number;
  title?: string;
  content?: string;
  type: CalendarTypes;
  start?: string;
  end?: string;
}
