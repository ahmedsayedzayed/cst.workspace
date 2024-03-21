import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface FilterLookupInputDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}
