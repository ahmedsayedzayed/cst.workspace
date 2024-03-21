import type { EntityDto } from '@abp/ng.core';

export interface ServiceCategoryListDto extends EntityDto<string> {
  name?: string;
  icon?: string;
}

export interface ServiceDetailsInputDto {
  systemCode?: string;
  processCode?: string;
}

export interface ServiceDetailsOutputDto {
  serviceId?: string;
  serviceName?: string;
  serviceCategoryName?: string;
  serviceSubCategoryName?: string;
  imageId: number;
  duration: number;
}

export interface ServiceSubCategoryListDto extends EntityDto<string> {
  name?: string;
  serviceCategoryId?: string;
}
