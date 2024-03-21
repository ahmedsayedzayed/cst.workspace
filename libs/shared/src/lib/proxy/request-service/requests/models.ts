import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { StatusCode_StatusCodeEnum } from './status-code-status-code-enum.enum';

export interface CategoryStatDto {
  categoryId?: string;
  count: number;
}

export interface GetRequestsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  requestNO?: string;
  serviceName?: string;
  requestStatusDetails?: string;
  serviceCategoryId?: string;
  serviceSubCategoryId?: string;
  requestStatusCode?: StatusCode_StatusCodeEnum;
  startDateMin?: string;
  startDateMax?: string;
  endDateMin?: string;
  endDateMax?: string;
}

export interface GetUserRequestDto {
  systemCode?: string;
  processCode?: string;
  requestNO?: string;
  requestStatusCode?: string;
  requestDeatiledStatusAr?: string;
  requestDeatiledStatusEn?: string;
  createdForUsername?: string;
  createdByUsername?: string;
  formURL?: string;
}

export interface GetUserRequestsServiceDto {
  status?: string;
  data: GetUserRequestDto[];
}

export interface GetUserRequestsServiceInput {
  systemCode: string;
  processCode?: string;
}

export interface RequestActionDto {
  actionName?: string;
  actionUrl?: string;
}

export interface RequestCreateDto {
  systemCode?: string;
  processCode?: string;
  requestNO?: string;
  requestStatusCode?: string;
  requestDeatiledStatusAr?: string;
  requestDetailedStatusEn?: string;
  createdForUsername?: string;
  createdByUsername?: string;
  formURL?: string;
}

export interface RequestDto extends FullAuditedEntityDto<string> {
  systemCode?: string;
  processCode?: string;
  requestNO?: string;
  requestStatusCode?: StatusCode_StatusCodeEnum;
  requestDeatiledStatusAr?: string;
  requestDeatiledStatusEn?: string;
  createdForUsername?: string;
  createdByUsername?: string;
  formURL?: string;
  startDate?: string;
  endDate?: string;
  serviceId?: string;
  concurrencyStamp?: string;
}

export interface RequestUpdateDto {
  systemCode?: string;
  processCode?: string;
  requestNO?: string;
  requestStatusCode?: string;
  requestDeatiledStatusAr?: string;
  requestDeatiledStatusEn?: string;
  createdForUsername?: string;
  createdByUsername?: string;
  formURL?: string;
}

export interface RequestUpdateStatusDto {
  systemCode?: string;
  processCode?: string;
  requestNO?: string;
  requestStatusCode?: string;
  requestDeatiledStatusAr?: string;
  requestDetailedStatusEn?: string;
}

export interface RequestUrlDto {
  url?: string;
}

export interface RequestWithNavigationPropertiesDto {
  id?: string;
  requestNO?: string;
  serviceName?: string;
  serviceCategoryName?: string;
  serviceSubCategoryName?: string;
  requestStatusCode?: StatusCode_StatusCodeEnum;
  requestStatusDetails?: string;
  startDate?: string;
  endDate?: string;
  formURL?: string;
  serviceId?: string;
  hasRate: boolean;
  actions: RequestActionDto[];
}
