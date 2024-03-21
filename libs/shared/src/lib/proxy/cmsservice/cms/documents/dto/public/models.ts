import type { DocumentCategory } from '../../../../enum/document-category.enum';
import type { RequestStatusEnum } from '../../../../enum/request-status-enum.enum';
import type { Status } from '../../../../enum/status.enum';
import type { StatusTypeEnum } from '../../../../enum/status-type-enum.enum';
import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface DocumentDto {
  id: number;
  sectorName?: string;
  mainDepartmentName?: string;
  fileName?: string;
  note?: string;
  documentCategory: DocumentCategory;
  publishDate?: string;
  requestDate?: string;
  requestStatusEnum: RequestStatusEnum;
  status: Status;
  userId?: string;
  userName?: string;
  fileAttachmentId?: number;
  statusTypeEnum: StatusTypeEnum;
}

export interface DocumentPublicDto {
  id: number;
  sectorName?: string;
  mainDepartmentName?: string;
  fileName?: string;
  documentCategory: DocumentCategory;
  publishDate?: string;
  fileAttachmentId?: number;
}

export interface GetDocumentsPublicInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  fileName?: string;
  documentCategory?: DocumentCategory;
  sectorId?: string;
  mainDepartmentId?: string;
}
