import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface AnnoucementAdminDto {
  titleAr?: string;
  contentAr?: string;
  titleEn?: string;
  contentEn?: string;
  endDate?: string;
  publishDate?: string;
  canEdit: boolean;
  hasEnglish: boolean;
  generalDepartmentName?: string;
}

export interface AnnoucementCreateDto {
  titleAr: string;
  contentAr: string;
  titleEn?: string;
  contentEn?: string;
  endDate?: string;
  publishDate?: string;
  hasEnglish: boolean;
}

export interface AnnoucementUpdateDto {
  titleAr: string;
  contentAr: string;
  titleEn?: string;
  contentEn?: string;
  endDate?: string;
  publishDate?: string;
  hasEnglish: boolean;
}

export interface GetAnnoucementsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  endDateMin?: string;
  endDateMax?: string;
  publishDateMin?: string;
  publishDateMax?: string;
  announcementDepartmentId?: string;
}
