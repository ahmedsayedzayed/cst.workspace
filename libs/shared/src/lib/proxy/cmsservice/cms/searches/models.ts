import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { EntitiesEnum } from '../../enum/entities-enum.enum';

export interface GetSearchesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
}

export interface SearchDto {
  entityId: number;
  title?: string;
  entity: EntitiesEnum;
  publishDate?: string;
  imageAttachmentId?: number;
  imageEntity?: string;
}
