import type { CalendarTypes } from '../../../../enum/calendar-types.enum';
import type { CalendarLocation } from '../../../../enum/calendar-location.enum';
import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CalendarAdminDto {
  titleAr?: string;
  contentAr?: string;
  titleEn?: string;
  contentEn?: string;
  type: CalendarTypes;
  sectorId?: string;
  mainDepartmentId?: string;
  location?: CalendarLocation;
  city?: string;
  address?: string;
  start?: string;
  end?: string;
  publishDate?: string;
  hasEnglish: boolean;
  lastModificationTime?: string;
}

export interface CalendarAdminListDto {
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
  creationTime?: string;
  publishDate?: string;
}

export interface CalendarCreateDto {
  titleAr?: string;
  contentAr?: string;
  titleEn?: string;
  contentEn?: string;
  type: CalendarTypes;
  sectorId?: string;
  mainDepartmentId?: string;
  location?: CalendarLocation;
  city?: string;
  address?: string;
  start?: string;
  end?: string;
  publishDate?: string;
  hasEnglish: boolean;
}

export interface CalendarUpdateDto {
  titleAr?: string;
  contentAr?: string;
  titleEn?: string;
  contentEn?: string;
  type: CalendarTypes;
  sectorId?: string;
  mainDepartmentId?: string;
  location?: CalendarLocation;
  city?: string;
  address?: string;
  start?: string;
  end?: string;
  publishDate?: string;
  hasEnglish: boolean;
}

export interface GetCalendarsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  type?: CalendarTypes;
  sectorId?: string;
  mainDepartmentId?: string;
  location?: CalendarLocation;
  startDateMax?: string;
  startDateMin?: string;
  endDateMax?: string;
  endDateMin?: string;
  publishDateMax?: string;
  publishDateMin?: string;
}
