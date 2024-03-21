import type { EntityDto, PagedAndSortedResultRequestDto, PagedResultRequestDto } from '@abp/ng.core';
import type { Status } from '../../../enum/status.enum';

export interface ServiceCategoryDto extends EntityDto<string> {
  nameAr?: string;
  nameEn?: string;
  icon?: string;
}

export interface ServiceCommonQuestionDto {
  serviceId?: string;
  questionAr?: string;
  questionEn?: string;
  answerAr?: string;
  answerEn?: string;
}

export interface ServiceSubCategoryDto extends EntityDto<string> {
  nameAr?: string;
  nameEn?: string;
  serviceCategoryId?: string;
}

export interface RelatedServiceDto {
  serviceId?: string;
  serviceNameEn?: string;
  serviceNameAr?: string;
}

export interface GetServicesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  serviceAr?: string;
  serviceEn?: string;
  durationMin?: number;
  durationMax?: number;
  status?: Status;
  serviceCategoryId: string[];
  serviceSubCategoryId: string[];
  getFavorite: boolean;
}

export interface LookupServiceRequestDto extends PagedResultRequestDto {
  filter?: string;
  status?: Status;
  serviceCategoryId?: string;
  serviceSubCategoryId?: string;
}
