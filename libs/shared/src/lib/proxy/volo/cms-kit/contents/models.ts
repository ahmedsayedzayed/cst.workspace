import type { ExtensibleAuditedEntityDto, ExtensibleEntityDto } from '@abp/ng.core';
import type { CmsUserDto } from '../users/models';

export interface BlogPostCommonDto extends ExtensibleAuditedEntityDto<string> {
  blogId?: string;
  title?: string;
  slug?: string;
  shortDescription?: string;
  content?: string;
  coverImageMediaId?: string;
  author: CmsUserDto;
}

export interface PageDto extends ExtensibleEntityDto<string> {
  title?: string;
  slug?: string;
  content?: string;
  contentEn?: string;
  script?: string;
  style?: string;
}
