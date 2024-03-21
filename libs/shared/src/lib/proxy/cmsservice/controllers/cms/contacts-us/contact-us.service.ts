import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ContackUsDto, TypesDTO } from '../../../cms/contacts-us/dto/admin/models';
import type { ContackUsCreateDto } from '../../../cms/contacts-us/dto/public/models';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  apiName = 'CMSService';
  

  createNew = (input: ContackUsCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ContackUsDto>({
      method: 'POST',
      url: '/api/cms-service/ContactUs',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getContactUs = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, TypesDTO>({
      method: 'GET',
      url: '/api/cms-service/ContactUs',
    },
    { apiName: this.apiName,...config });
  

  getContactUsFooter = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, TypesDTO[]>({
      method: 'GET',
      url: '/api/cms-service/ContactUs/GetContactUsFooter',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
