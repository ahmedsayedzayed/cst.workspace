import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface BlogPostFilteredPagedAndSortedResultRequestDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface BlogPostGetListInput extends PagedAndSortedResultRequestDto {
  authorId?: string;
  tagId?: string;
}
