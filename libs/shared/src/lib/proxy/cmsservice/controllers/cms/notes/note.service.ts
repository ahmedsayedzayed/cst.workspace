import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { NoteCreateDto, NoteDto, NoteUpdateDto } from '../../../cms/notes/common/models';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  apiName = 'CMSService';
  

  create = (input: NoteCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, NoteDto>({
      method: 'POST',
      url: '/api/cms-service/notes',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-service/notes/${id}`,
    },
    { apiName: this.apiName,...config });
  

  deleteAll = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/cms-service/notes/DeleteAllAsync',
    },
    { apiName: this.apiName,...config });
  

  deleteDone = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/cms-service/notes/DeleteDoneAsync',
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, NoteDto>({
      method: 'GET',
      url: `/api/cms-service/notes/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, NoteDto[]>({
      method: 'GET',
      url: '/api/cms-service/notes',
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: NoteUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, NoteDto>({
      method: 'PUT',
      url: `/api/cms-service/notes/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
