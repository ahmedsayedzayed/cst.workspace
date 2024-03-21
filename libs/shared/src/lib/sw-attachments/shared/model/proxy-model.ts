import { AuditedEntityDto, PagedAndSortedResultRequestDto } from "@abp/ng.core";

export enum AttachmentStatuses {
  PendingDelete = 59,
  Deleted = 60,
  PendingSave = 61,
  Saved = 62,
}

export interface GetAttachmentDetailsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  fileName?: string;
  extension?: string;
  fileSizeMin?: number;
  fileSizeMax?: number;
  attachmentStatus?: AttachmentStatuses;
  attachmentRef?: string;
  externalId?: string;
  entity?: string;
  attachmentDetailFileId?: number;
  attachmentId?: number;
  asTime?: string;
}

export interface AttachmentDetailDto extends AuditedEntityDto<number> {
  fileName?: string;
  extension?: string;
  fileSize: number;
  attachmentStatus: number;
  attachmentRef?: string;
  externalId?: string;
  entity?: string;
  attachmentId?: number;
  attachmentDetailFileId?: number;
}

export interface AttachmentDetailFileDto extends AuditedEntityDto<number> {
  file: number[];
  name?: string;
}

export interface AttachmentDetailWithNavigationPropertiesDto {
  attachmentDetail: AttachmentDetailDto;
  attachment: AttachmentDto;
  attachmentDetailFile: AttachmentDetailFileDto;
}

export interface AttachmentDto extends AuditedEntityDto<number> {
  attachmentName?: string;
}

export interface FileBinaryData {
  data?: string;
  filename?: string;
}