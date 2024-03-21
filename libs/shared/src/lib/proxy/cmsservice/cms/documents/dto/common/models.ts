import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { Status } from '../../../../enum/status.enum';
import type { DocumentCategory } from '../../../../enum/document-category.enum';
import type { RequestStatusEnum } from '../../../../enum/request-status-enum.enum';
import type { StatusTypeEnum } from '../../../../enum/status-type-enum.enum';

export interface GetDocumentsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  fileName?: string;
  sectorId?: string;
  mainDepartmentId?: string;
  status?: Status;
  documentCategory?: DocumentCategory;
  requestStatus?: RequestStatusEnum;
  publishDateMin?: string;
  publishDateMax?: string;
  statusTypeEnum?: StatusTypeEnum;
  requestDateMin?: string;
  requestDateMax?: string;
}
