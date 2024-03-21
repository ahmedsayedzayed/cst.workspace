import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { GetSurveysInput, SurveyAdminDTO, SurveyAdminListDto, SurveyAdminResultDTO, SurveyCreateDto, SurveyDto, SurveyExcelDownloadDto, SurveyUpdateDto } from '../../../cms/surveys/dto/admin/models';
import type { ParticipateInput, SurveyPublicDTO, SurveyPublicListDTO } from '../../../cms/surveys/dto/public/models';
import type { DownloadTokenResultDto } from '../../../shared/dto/admin/models';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  apiName = 'CMSService';
  

  create = (input: SurveyCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SurveyDto>({
      method: 'POST',
      url: '/api/CMS-service/surveys',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/CMS-service/surveys/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAdmin = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SurveyAdminDTO>({
      method: 'GET',
      url: `/api/CMS-service/surveys/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAdminResultById = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SurveyAdminResultDTO>({
      method: 'POST',
      url: '/api/CMS-service/surveys/GetAdminResult',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  getDownloadToken = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, DownloadTokenResultDto>({
      method: 'GET',
      url: '/api/CMS-service/surveys/download-token',
    },
    { apiName: this.apiName,...config });
  

  getListAdmin = (input: GetSurveysInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SurveyAdminListDto>>({
      method: 'GET',
      url: '/api/CMS-service/surveys',
      params: { filterText: input.filterText, id: input.id, title: input.title, sectorId: input.sectorId, mainDepartmentId: input.mainDepartmentId, secondaryDepartmentId: input.secondaryDepartmentId, endDateMin: input.endDateMin, endDateMax: input.endDateMax, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, lang: input.lang, status: input.status, userId: input.userId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListAsExcelFile = (input: SurveyExcelDownloadDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, Blob>({
      method: 'GET',
      responseType: 'blob',
      url: '/api/CMS-service/surveys/as-excel-file',
      params: { downloadToken: input.downloadToken, filterText: input.filterText, id: input.id, title: input.title, sectorId: input.sectorId, mainDepartmentId: input.mainDepartmentId, secondaryDepartmentId: input.secondaryDepartmentId, endDateMin: input.endDateMin, endDateMax: input.endDateMax, publishDateMin: input.publishDateMin, publishDateMax: input.publishDateMax, lang: input.lang, status: input.status, userId: input.userId },
    },
    { apiName: this.apiName,...config });
  

  getListPublic = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<SurveyPublicListDTO>>({
      method: 'GET',
      url: '/api/CMS-service/surveys/GetListPublicAsync',
    },
    { apiName: this.apiName,...config });
  

  getPublic = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SurveyPublicDTO>({
      method: 'GET',
      url: `/api/CMS-service/surveys/Public/${id}`,
    },
    { apiName: this.apiName,...config });
  

  submitParticipateByInput = (input: ParticipateInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/CMS-service/surveys/SubmitParticipate',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: SurveyUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, SurveyDto>({
      method: 'PUT',
      url: `/api/CMS-service/surveys/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
