import type { EntityDto } from '@abp/ng.core';

export interface PageLookupDto extends EntityDto<string> {
  title?: string;
  slug?: string;
}
