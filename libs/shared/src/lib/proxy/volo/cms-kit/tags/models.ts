import type { ExtensibleEntityDto } from '@abp/ng.core';

export interface PopularTagDto {
  id?: string;
  name?: string;
  count: number;
}

export interface TagDto extends ExtensibleEntityDto<string> {
  entityType?: string;
  name?: string;
  concurrencyStamp?: string;
}
