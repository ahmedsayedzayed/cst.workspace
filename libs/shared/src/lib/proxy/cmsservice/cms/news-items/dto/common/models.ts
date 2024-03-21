import type { EntityDto } from '@abp/ng.core';

export interface NewsItemDto extends EntityDto<number> {
  titleEn?: string;
  titleAr?: string;
  contentEn?: string;
  contentAr?: string;
  imageId: number;
  attachmentEnId?: number;
  attachmentArId?: number;
  publishDate?: string;
  concurrencyStamp?: string;
}
