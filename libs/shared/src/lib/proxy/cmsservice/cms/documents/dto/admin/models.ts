import type { DocumentCategory } from '../../../../enum/document-category.enum';
import type { Status } from '../../../../enum/status.enum';
import type { RequestStatusEnum } from '../../../../enum/request-status-enum.enum';

export interface DocumentCreateDto {
  fileNameAr?: string;
  fileNameEn?: string;
  note?: string;
  arFileAttachmentId: number;
  arFileAttachmentFile?: string;
  enFileAttachmentId?: number;
  enFileAttachmentFile?: string;
  sectorId?: string;
  mainDepartmentId?: string;
  documentCategory: DocumentCategory;
  publishDate?: string;
  hasEnglish: boolean;
}

export interface DocumentExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  fileName?: string;
  sectorId?: string;
  mainDepartmentId?: string;
  status?: Status;
  documentCategory?: DocumentCategory;
  requestStatus?: RequestStatusEnum;
  publishDateMin?: string;
  publishDateMax?: string;
}

export interface DocumentUpdateDto {
  fileNameAr?: string;
  fileNameEn?: string;
  note?: string;
  arFileAttachmentId: number;
  arFileAttachmentFile?: string;
  enFileAttachmentId?: number;
  enFileAttachmentFile?: string;
  sectorId?: string;
  mainDepartmentId?: string;
  documentCategory: DocumentCategory;
  publishDate?: string;
  hasEnglish: boolean;
}

export interface GetDocumentDto {
  id: number;
  fileNameAr?: string;
  fileNameEn?: string;
  note?: string;
  arFileAttachmentId: number;
  enFileAttachmentId: number;
  sectorId?: string;
  mainDepartmentId?: string;
  documentCategory: DocumentCategory;
  publishDate?: string;
  status: Status;
  hasEnglish: boolean;
}
