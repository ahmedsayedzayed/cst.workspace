import type { EntityDto, PagedResultRequestDto } from '@abp/ng.core';
import type { MediaTypes } from '../../../../enum/media-types.enum';

export interface GetMediaHashtagsInput extends PagedResultRequestDto {
  filterText?: string;
}

export interface MediaDto extends EntityDto<number> {
  mediaType: MediaTypes;
  title?: string;
  videoCode?: string;
  videoUrl?: string;
  imageAttachmentId?: number;
  publishDate?: string;
}

export interface MediaHashtagDto extends EntityDto<number> {
  hashtagName?: string;
}
