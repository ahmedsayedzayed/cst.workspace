import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CSTSystemCreateDto {
  nameAr: string;
  nameEn: string;
  systemCode: string;
}

export interface CSTSystemDto extends AuditedEntityDto<string> {
  nameAr?: string;
  nameEn?: string;
}

export interface CSTSystemUpdateDto {
  nameAr: string;
  nameEn: string;
  systemCode: string;
}

export interface GetCSTSystemsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  nameAr?: string;
  nameEn?: string;
}
