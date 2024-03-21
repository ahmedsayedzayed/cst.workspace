import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetMediaCenterPublicInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
}

export interface MediaCenterPublicDto {
  title?: string;
  content?: string;
  imageId: number;
  attachmentId?: number;
  date?: string;
  hasEnglish: boolean;
}
