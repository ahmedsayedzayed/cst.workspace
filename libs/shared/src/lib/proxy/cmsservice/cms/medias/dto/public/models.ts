import type { PagedResultRequestDto } from '@abp/ng.core';
import type { MediaTypes } from '../../../../enum/media-types.enum';

export interface GetMediasInput extends PagedResultRequestDto {
  mediaType: MediaTypes[];
  filterText?: string;
  mediaHashtags: number[];
}
