import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AttachmentDetailDto, GetAttachmentDetailsInput } from '../../../cms/attachment-dtos/models';
import type { DocumentCreateDto, DocumentExcelDownloadDto, DocumentUpdateDto, GetDocumentDto } from '../../../cms/documents/dto/admin/models';
import type { GetDocumentsInput } from '../../../cms/documents/dto/common/models';
import type { DocumentDto, DocumentPublicDto, GetDocumentsPublicInput } from '../../../cms/documents/dto/public/models';
import type { FileContentResult, IActionResult } from '../../../../microsoft/asp-net-core/mvc/models';
import type { FileBlobData } from '../../../models';
import type { DownloadTokenResultDto } from '../../../shared/dto/admin/models';
import type { GetUserDataDto } from '../../../target-audiences/models';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  apiName = 'CMSService';
  

  activate = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/cms-service/documents/Activate',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  approveCreateById = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/cms-service/documents/ApproveCreate',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  approveDeleteById = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/cms-service/documents/ApproveDelete',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  approveEditById = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/cms-service/documents/ApproveEdit',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  attachment_Delete = (id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/documents/Attachment_DeleteAsync/${id}/${entity}`,
    },
    { apiName: this.apiName,...config });
  

  attachment_GetList = (input: GetAttachmentDetailsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AttachmentDetailDto>>({
      method: 'GET',
      url: '/api/cms-service/documents/Attachment_GetListAsync',
      params: { filterText: input.filterText, fileName: input.fileName, extension: input.extension, fileSizeMin: input.fileSizeMin, fileSizeMax: input.fileSizeMax, attachmentStatus: input.attachmentStatus, attachmentRef: input.attachmentRef, externalId: input.externalId, entity: input.entity, attachmentDetailFileId: input.attachmentDetailFileId, attachmentId: input.attachmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  create = (input: DocumentCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DocumentDto>({
      method: 'POST',
      url: '/api/cms-service/documents',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  deactivate = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/cms-service/documents/Deactivate',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/documents/${id}`,
    },
    { apiName: this.apiName,...config });
  

  downloadAttachment = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileContentResult>({
      method: 'GET',
      url: '/api/cms-service/documents/DownloadAttachment',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentBlobByAttachmentIdAndEntity = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/documents/DownloadAttachmentBlob',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailBlobByIdAndEntity = (Id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/documents/DownloadAttachmentDetailBlob',
      params: { id: Id, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailImageByIdAndEntityAndDownloadToken = (Id: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/documents/DownloadAttachmentDetailImage',
      params: { id: Id, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentImageByAttachmentIdAndEntityAndDownloadToken = (attachmentId: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/documents/DownloadAttachmentImage',
      params: { attachmentId, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetDocumentDto>({
      method: 'GET',
      url: `/api/cms-service/documents/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/cms-service/documents/download-token',
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetDocumentsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DocumentDto>>({
      method: 'GET',
      url: '/api/cms-service/documents/GetListAsync',
      params: { filterText: input.filterText, fileName: input.fileName, sectorId: input.sectorId, mainDepartmentId: input.mainDepartmentId, status: input.status, documentCategory: input.documentCategory, requestStatus: input.requestStatus, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, statusTypeEnum: input.statusTypeEnum, requestDateMin: input.requestDateMin, requestDateMax: input.requestDateMax, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListActive = (input: GetDocumentsPublicInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<DocumentPublicDto>>({
      method: 'GET',
      url: '/api/cms-service/documents/GetListActiveAsync',
      params: { filterText: input.filterText, fileName: input.fileName, documentCategory: input.documentCategory, sectorId: input.sectorId, mainDepartmentId: input.mainDepartmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListAsExcelFile = (input: DocumentExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>({
      method: 'GET',
      responseType: 'blob',
      url: '/api/cms-service/documents/as-excel-file',
      params: { downloadToken: input.downloadToken, filterText: input.filterText, fileName: input.fileName, sectorId: input.sectorId, mainDepartmentId: input.mainDepartmentId, status: input.status, documentCategory: input.documentCategory, requestStatus: input.requestStatus, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax },
    },
    { apiName: this.apiName,...config });
  

  rejectCreateById = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/cms-service/documents/RejectCreate',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  rejectDeleteById = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/cms-service/documents/RejectDelete',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  rejectEditById = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/cms-service/documents/RejectEdit',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: DocumentUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DocumentDto>({
      method: 'PUT',
      url: `/api/cms-service/documents/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  userSectorData = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, GetUserDataDto>({
      method: 'GET',
      url: '/api/cms-service/documents/UserSectorData',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
