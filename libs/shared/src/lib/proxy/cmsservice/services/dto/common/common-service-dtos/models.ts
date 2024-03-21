import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetServiceCategoriesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  nameAr?: string;
  nameEn?: string;
}

export interface GetServiceSubCategoriesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  nameAr?: string;
  nameEn?: string;
  serviceCategoryId?: string;
}
