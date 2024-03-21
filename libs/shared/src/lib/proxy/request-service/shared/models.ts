import type { PagedResultRequestDto } from '@abp/ng.core';

export interface LookupCategoryDtoGuid {
  id?: string;
  displayName?: string;
  icon?: string;
}

export interface LookupDtoGuid {
  id?: string;
  displayName?: string;
}

export interface LookupRequestCascadeDto extends PagedResultRequestDto {
  filter?: string;
  parentId?: string;
}

export interface LookupRequestDto extends PagedResultRequestDto {
  filter?: string;
}
