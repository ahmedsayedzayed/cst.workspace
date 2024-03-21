import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AboutAttachmentDto, AboutAttachmentViewDto, AboutCommissionDto, AboutCommissionGetDto, HistoricalOverviewDto, HistoricalOverviewGetDto, OrganizationalChartDto, SectorDto, SectorViewDto, SectorViewWithDetailsDto } from '../../../cms/about-commission/models';
import type { AttachmentDetailDto, GetAttachmentDetailsInput } from '../../../cms/attachment-dtos/models';
import type { FileContentResult, IActionResult } from '../../../../microsoft/asp-net-core/mvc/models';
import type { FileBlobData } from '../../../models';
import type { DownloadTokenResultDto } from '../../../shared/dto/admin/models';

@Injectable({
  providedIn: 'root',
})
export class AboutCommissionService {
  apiName = 'CMSService';
  

  attachment_Delete = (id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/about-commission/Attachment_DeleteAsync/${id}/${entity}`,
    },
    { apiName: this.apiName,...config });
  

  attachment_GetList = (input: GetAttachmentDetailsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AttachmentDetailDto>>({
      method: 'GET',
      url: '/api/cms-service/about-commission/Attachment_GetListAsync',
      params: { filterText: input.filterText, fileName: input.fileName, extension: input.extension, fileSizeMin: input.fileSizeMin, fileSizeMax: input.fileSizeMax, attachmentStatus: input.attachmentStatus, attachmentRef: input.attachmentRef, externalId: input.externalId, entity: input.entity, attachmentDetailFileId: input.attachmentDetailFileId, attachmentId: input.attachmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  deleteSector = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'DELETE',
      url: '/api/cms-service/about-commission/DeleteSector',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachment = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileContentResult>({
      method: 'GET',
      url: '/api/cms-service/about-commission/DownloadAttachment',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentBlobByAttachmentIdAndEntity = (attachmentId: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/about-commission/DownloadAttachmentBlob',
      params: { attachmentId, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailBlobByIdAndEntity = (Id: number, entity: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/about-commission/DownloadAttachmentDetailBlob',
      params: { id: Id, entity },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentDetailImageByIdAndEntityAndDownloadToken = (Id: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/about-commission/DownloadAttachmentDetailImage',
      params: { id: Id, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  downloadAttachmentImageByAttachmentIdAndEntityAndDownloadToken = (attachmentId: number, entity: string, DownloadToken: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/api/cms-service/about-commission/DownloadAttachmentImage',
      params: { attachmentId, entity, downloadToken: DownloadToken },
    },
    { apiName: this.apiName,...config });
  

  getAboutAttatchments = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AboutAttachmentDto>({
      method: 'GET',
      url: '/api/cms-service/about-commission/GetAboutAttatchments',
    },
    { apiName: this.apiName,...config });
  

  getAboutCommission = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AboutCommissionDto>({
      method: 'GET',
      url: '/api/cms-service/about-commission/GetAboutCommission',
    },
    { apiName: this.apiName,...config });
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/cms-service/about-commission/GetDownloadToken',
    },
    { apiName: this.apiName,...config });
  

  getHistoricalOverview = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, HistoricalOverviewDto>({
      method: 'GET',
      url: '/api/cms-service/about-commission/GetHistoricalOverview',
    },
    { apiName: this.apiName,...config });
  

  getSector = (sectorId: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SectorDto>({
      method: 'GET',
      url: '/api/cms-service/about-commission/GetSector',
      params: { sectorId },
    },
    { apiName: this.apiName,...config });
  

  getSectorList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SectorViewDto>>({
      method: 'GET',
      url: '/api/cms-service/about-commission/GetSectorList',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getSectorListWithDetailsByInput = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SectorViewWithDetailsDto>>({
      method: 'GET',
      url: '/api/cms-service/about-commission/GetSectorListWithDetails',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  saveAboutAttatchments = (input: AboutAttachmentDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AboutAttachmentDto>({
      method: 'POST',
      url: '/api/cms-service/about-commission/SaveAboutAttatchments',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  saveAboutCommission = (input: AboutCommissionDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AboutCommissionDto>({
      method: 'POST',
      url: '/api/cms-service/about-commission/SaveAboutCommission',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  saveHistoricalOverview = (input: HistoricalOverviewDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, HistoricalOverviewDto>({
      method: 'POST',
      url: '/api/cms-service/about-commission/SaveHistoricalOverview',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  saveSector = (input: SectorDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SectorDto>({
      method: 'POST',
      url: '/api/cms-service/about-commission/SaveSector',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  viewAboutAttatchments = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AboutAttachmentViewDto>({
      method: 'GET',
      url: '/api/cms-service/about-commission/ViewAboutAttatchments',
    },
    { apiName: this.apiName,...config });
  

  viewAboutCommission = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AboutCommissionGetDto>({
      method: 'GET',
      url: '/api/cms-service/about-commission/ViewAboutCommission',
    },
    { apiName: this.apiName,...config });
  

  viewHistoricalOverview = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, HistoricalOverviewGetDto>({
      method: 'GET',
      url: '/api/cms-service/about-commission/ViewHistoricalOverview',
    },
    { apiName: this.apiName,...config });
  

  viewOrganizationalChart = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrganizationalChartDto[]>({
      method: 'POST',
      url: '/api/cms-service/about-commission/ViewOrganizationalChart',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
