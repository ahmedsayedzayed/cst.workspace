import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetRemedyServicesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  instanceID?: string;
  srd_Title?: string;
}

export interface RemedyServiceCreateDto {
  instanceID?: string;
  srd_Title?: string;
}

export interface RemedyServiceDto extends FullAuditedEntityDto<number> {
  instanceID?: string;
  srd_Title?: string;
  concurrencyStamp?: string;
}

export interface RemedyServiceUpdateDto {
  instanceID?: string;
  srd_Title?: string;
  concurrencyStamp?: string;
}
