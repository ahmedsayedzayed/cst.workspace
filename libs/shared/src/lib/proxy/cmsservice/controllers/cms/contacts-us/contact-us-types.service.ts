import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ContactUsTypesDto, TypesDTO } from '../../../cms/contacts-us/dto/admin/models';

@Injectable({
  providedIn: 'root',
})
export class ContactUsTypesService {
  apiName = 'CMSService';
  

  creat = (Input: ContactUsTypesDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TypesDTO[]>({
      method: 'POST',
      url: '/api/cms-service/ContactUsTypes',
      body: Input,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, TypesDTO[]>({
      method: 'GET',
      url: '/api/cms-service/ContactUsTypes/GetListAsync',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
