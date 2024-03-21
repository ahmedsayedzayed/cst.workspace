import type { EntityDto } from '@abp/ng.core';

export interface MediaCenterListDto extends EntityDto<number> {
  title?: string;
  content?: string;
  imageId: number;
  publishDate?: string;
  hasEnglish: boolean;
}
