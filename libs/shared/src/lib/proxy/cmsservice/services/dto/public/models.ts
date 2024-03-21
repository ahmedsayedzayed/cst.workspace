import type { EntityDto } from '@abp/ng.core';
import type { Status } from '../../../enum/status.enum';

export interface RelatedServicePublicDto {
  serviceId?: string;
  serviceName?: string;
}

export interface ServiceCategoryStatisticsDto {
  categoryId?: string;
  count: number;
}

export interface ServiceCommonQuestionPublicDto {
  serviceId?: string;
  question?: string;
  answer?: string;
}

export interface ServiceDetailsPublicDto extends EntityDto<string> {
  serviceName?: string;
  description?: string;
  imageId?: number;
  serviceDurationId?: string;
  serviceDuration?: string;
  requiredDocuments?: string;
  serviceProcedures?: string;
  formType?: number;
  redirectUrl?: string;
  serviceCategoryId?: string;
  serviceCategoryName?: string;
  serviceSubCategoryId?: string;
  serviceSubCategoryName?: string;
  isFavorite?: boolean;
  status: Status;
  userManualAttachmentID?: number;
  processCode?: string;
  cstSystemName?: string;
  cstSystemId?: string;
  taskDurationId?: string;
}

export interface ServicePublicDto extends EntityDto<string> {
  serviceName?: string;
  imageId?: number;
  redirectUrl?: string;
  serviceCategoryId?: string;
  serviceCategoryName?: string;
  serviceSubCategoryId?: string;
  serviceSubCategoryName?: string;
  serviceDurationId?: string;
  serviceDuration?: string;
  isFavorite: boolean;
  status: Status;
  userManualAttachmentID?: number;
  processCode?: string;
  cstSystemName?: string;
}

export interface ServiceWithNavigationPropertiesPublicDto {
  service: ServiceDetailsPublicDto;
  relatedServices: RelatedServicePublicDto[];
  serviceCommonQuestions: ServiceCommonQuestionPublicDto[];
}

export interface UserQuickAccessServiceDto {
  serviceId?: string;
  serviceName?: string;
}
