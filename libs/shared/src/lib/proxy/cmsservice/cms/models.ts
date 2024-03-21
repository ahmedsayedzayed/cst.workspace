import type { AuditedEntityDto } from '@abp/ng.core';
import type { MediaTypes } from '../enum/media-types.enum';

export interface MediaAdminListDto extends AuditedEntityDto<number> {
  mediaType: MediaTypes;
  title?: string;
  hashtags: string[];
  videoCode?: string;
  imageAttachmentId?: number;
  publishDate?: string;
}
