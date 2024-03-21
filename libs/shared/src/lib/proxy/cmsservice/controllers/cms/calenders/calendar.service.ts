import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CalendarAdminDto, CalendarAdminListDto, CalendarCreateDto, CalendarUpdateDto, GetCalendarsInput } from '../../../cms/calenders/dto/admin/models';
import type { CalendarDto, CalendarMonthlyDTO } from '../../../cms/calenders/dto/public/models';
import type { FileBlobData } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  apiName = 'CMSService';
  

  create = (input: CalendarCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CalendarDto>({
      method: 'POST',
      url: '/api/cms-service/calendars',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/calendars/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CalendarDto>({
      method: 'GET',
      url: `/api/cms-service/calendars/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAdmin = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CalendarAdminDto>({
      method: 'GET',
      url: `/api/cms-service/calendars/GetAdminAsync/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getICS = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileBlobData>({
      method: 'GET',
      url: '/api/cms-service/calendars/GetICS',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  getList = (start: string, end: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CalendarMonthlyDTO[]>({
      method: 'GET',
      url: '/api/cms-service/calendars/GetListAsync',
      params: { start, end },
    },
    { apiName: this.apiName,...config });
  

  getListAdmin = (input: GetCalendarsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CalendarAdminListDto>>({
      method: 'GET',
      url: '/api/cms-service/calendars',
      params: { filterText: input.filterText, type: input.type, sectorId: input.sectorId, mainDepartmentId: input.mainDepartmentId, location: input.location, startDateMax: input.startDateMax, startDateMin: input.startDateMin, endDateMax: input.endDateMax, endDateMin: input.endDateMin, publishDateMax: input.publishDateMax, publishDateMin: input.publishDateMin, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getListForMonthStart = (year: number, month: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CalendarMonthlyDTO[]>({
      method: 'GET',
      url: '/api/cms-service/calendars/GetListForMonthStartAsync',
      params: { year, month },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: CalendarUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CalendarDto>({
      method: 'PUT',
      url: `/api/cms-service/calendars/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
