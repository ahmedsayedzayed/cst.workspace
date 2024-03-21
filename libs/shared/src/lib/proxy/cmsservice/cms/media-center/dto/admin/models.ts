import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetMediaCenterAdminInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  title?: string;
  content?: string;
  imageAttachment?: number;
  attachmentId?: number;
  publishDateMin?: string;
  publishDateMax?: string;
  eventDateMin?: string;
  eventDateMax?: string;
}

export interface MediaCenterAdminDto extends FullAuditedEntityDto<number> {
  titleEn?: string;
  titleAr?: string;
  contentEn?: string;
  contentAr?: string;
  imageId: number;
  attachmentEnId?: number;
  attachmentArId?: number;
  publishDate?: string;
  eventDate?: string;
  hasEnglish: boolean;
  concurrencyStamp?: string;
}
