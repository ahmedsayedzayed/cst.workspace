import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { AnnoucementAdminDto, AnnoucementCreateDto, AnnoucementUpdateDto, GetAnnoucementsInput } from '../../../cms/annoucements/dto/admin/models';
import type { AnnoucementAdminListDto } from '../../../cms/annoucements/dto/common/models';
import type { AnnoucementPublicDto, AnnoucementPublicListDto, AnnouncementArchievedDto, GetArcheiveInput } from '../../../cms/annoucements/dto/public/models';
import type { LookupDtoGuid, LookupRequestDto } from '../../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class AnnoucementService {
  apiName = 'CMSService';
  

  archieveAnnouncementById = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/CMS-service/annoucements/ArchieveAnnouncement',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  create = (input: AnnoucementCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AnnoucementAdminDto>({
      method: 'POST',
      url: '/api/CMS-service/annoucements',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/CMS-service/annoucements/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AnnoucementAdminDto>({
      method: 'GET',
      url: '/api/CMS-service/annoucements/GetAdminAnnouncement',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  getAnnouncementDepartmentLookup = (input: LookupRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LookupDtoGuid>>({
      method: 'GET',
      url: '/api/CMS-service/annoucements/GetAnnouncementDepartmentLookupAsync',
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getArchieve = (input: GetArcheiveInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AnnouncementArchievedDto>>({
      method: 'GET',
      url: '/api/CMS-service/annoucements/GetArchieveAsync',
      params: { filterText: input.filterText, title: input.title, content: input.content, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, archeiveDateMin: input.archeiveDateMin, archeiveDateMax: input.archeiveDateMax, announcmentArchievingStatus: input.announcmentArchievingStatus, announcementDepartmentId: input.announcementDepartmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListAdmin = (input: GetAnnoucementsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AnnoucementAdminListDto>>({
      method: 'GET',
      url: '/api/CMS-service/annoucements/GetAdminList',
      params: { filterText: input.filterText, endDateMin: input.endDateMin, endDateMax: input.endDateMax, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, announcementDepartmentId: input.announcementDepartmentId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListPublic = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, AnnoucementPublicListDto[]>({
      method: 'GET',
      url: '/api/CMS-service/annoucements/GetPublicList',
    },
    { apiName: this.apiName,...config });
  

  getPublic = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AnnoucementPublicDto>({
      method: 'GET',
      url: '/api/CMS-service/annoucements/GetPublicAsync',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  getUserDepartment = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: '/api/CMS-service/annoucements/GetUserDepartment',
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: AnnoucementUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AnnoucementAdminDto>({
      method: 'PUT',
      url: `/api/CMS-service/annoucements/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  validateUserDepartment = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/CMS-service/annoucements/ValidateUserDepartment',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
