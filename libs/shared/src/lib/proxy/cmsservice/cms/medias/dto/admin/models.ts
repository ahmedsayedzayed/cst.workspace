import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { MediaTypes } from '../../../../enum/media-types.enum';

export interface GetMediasAdminInput extends PagedAndSortedResultRequestDto {
  mediaType: MediaTypes[];
  filterText?: string;
  minPublishDate?: string;
  maxPublishDate?: string;
  mediaHashtags: number[];
}

export interface MediaAdminDetailsDto extends FullAuditedEntityDto<number> {
  mediaType: MediaTypes;
  titleEn?: string;
  titleAr?: string;
  hashtags: string[];
  videoCode?: string;
  imageAttachmentId?: number;
  concurrencyStamp?: string;
  publishDate?: string;
  hasEnglish: boolean;
}

export interface MediaCreateDto {
  mediaType?: MediaTypes;
  titleEn?: string;
  titleAr: string;
  hashtags: string[];
  videoCode?: string;
  imageAttachmentId?: number;
  imageAttachmentIdFiles?: string;
  publishDate?: string;
  hasEnglish?: boolean;
}

export interface MediaExcelDownloadDto {
  downloadToken?: string;
  mediaType: MediaTypes[];
  filterText?: string;
  minPublishDate?: string;
  maxPublishDate?: string;
  mediaHashtags: number[];
}

export interface MediaUpdateDto {
  mediaType?: MediaTypes;
  titleEn?: string;
  titleAr: string;
  hashtags: string[];
  videoCode?: string;
  imageAttachmentId?: number;
  imageAttachmentIdFiles?: string;
  publishDate?: string;
  hasEnglish?: boolean;
  concurrencyStamp: string;
}
