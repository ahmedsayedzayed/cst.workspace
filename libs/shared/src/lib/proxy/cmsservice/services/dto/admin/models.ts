import type { AuditedEntityDto, PagedAndSortedResultRequestDto, PagedResultRequestDto } from '@abp/ng.core';
import type { Status } from '../../../enum/status.enum';

export interface GetServiceDurationsInput extends PagedAndSortedResultRequestDto {
  duration: number;
}

export interface LookupSubCategoryRequestDto extends PagedResultRequestDto {
  filter?: string;
  serviceCategoryId?: string;
}

export interface ServiceAdminDto {
  id?: string;
  serviceName?: string;
  serviceDurationId?: string;
  serviceDuration?: string;
  serviceCategoryId?: string;
  serviceCategoryName?: string;
  serviceSubCategoryId?: string;
  serviceSubCategoryName?: string;
  status: Status;
  userManualAttachmentID?: number;
  processCode?: string;
  imageId?: number;
  cstSystemName?: string;
  taskDurationId?: string;
}

export interface ServiceDurationCreateDto {
  duration: number;
}

export interface ServiceDurationDto extends AuditedEntityDto<string> {
  duration: number;
}

export interface ServiceDurationUpdateDto {
  duration: number;
}
