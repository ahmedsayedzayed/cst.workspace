import type { FullAuditedEntityDto } from '@abp/ng.core';

export interface CSTEventDto extends FullAuditedEntityDto<number> {
  titleEn?: string;
  titleAr?: string;
  contentEn?: string;
  contentAr?: string;
  imageId: number;
  attachmentEnId?: number;
  attachmentArId?: number;
  publishDate?: string;
}
