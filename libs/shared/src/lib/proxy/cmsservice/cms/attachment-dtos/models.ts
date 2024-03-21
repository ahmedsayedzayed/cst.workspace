import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface AttachmentDetailDto extends AuditedEntityDto<number> {
  fileName?: string;
  extension?: string;
  fileSize: number;
  attachmentStatus: number;
  attachmentRef?: string;
  externalId?: string;
  entity?: string;
  attachmentDetailFileId: number;
  attachmentId: number;
  concurrencyStamp?: string;
}

export interface GetAttachmentDetailsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  fileName?: string;
  extension?: string;
  fileSizeMin?: number;
  fileSizeMax?: number;
  attachmentStatus?: number;
  attachmentRef?: string;
  externalId?: string;
  entity?: string;
  attachmentDetailFileId?: number;
  attachmentId?: number;
}
