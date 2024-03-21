import type { GetRemedyServiceQuestionsInput, RemedyServiceQuestionCreateDto, RemedyServiceQuestionDto, RemedyServiceQuestionUpdateDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemedyServiceQuestionService {
  apiName = 'RemedyService';
  

  create = (input: RemedyServiceQuestionCreateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemedyServiceQuestionDto>({
      method: 'POST',
      url: '/api/remedy-service/remedy-service-questions',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/remedy-service/remedy-service-questions/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemedyServiceQuestionDto>({
      method: 'GET',
      url: `/api/remedy-service/remedy-service-questions/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: GetRemedyServiceQuestionsInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<RemedyServiceQuestionDto>>({
      method: 'GET',
      url: '/api/remedy-service/remedy-service-questions',
      params: { filterText: input.filterText, requestID: input.requestID, locale: input.locale, srd_ID: input.srd_ID, srdInstanceID_DispProp: input.srdInstanceID_DispProp, questionSRD_InstanceID: input.questionSRD_InstanceID, questionDef_InstanceID: input.questionDef_InstanceID, questionnaire: input.questionnaire, type: input.type, format: input.format, text_Trunc: input.text_Trunc, question_User_Format: input.question_User_Format, question_Hidden: input.question_Hidden, sort_IntMin: input.sort_IntMin, sort_IntMax: input.sort_IntMax, menu_Label: input.menu_Label, menu_Value: input.menu_Value, required: input.required, defaultResponse: input.defaultResponse, rangeMinValue: input.rangeMinValue, rangeMaxValue: input.rangeMaxValue, menuSourceForm: input.menuSourceForm, menuSourceQualification: input.menuSourceQualification, menuLabelSourceField: input.menuLabelSourceField, menuValueSourceField: input.menuValueSourceField, question_OrderMin: input.question_OrderMin, question_OrderMax: input.question_OrderMax, question_Text: input.question_Text, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  setRemedyQuestions = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/remedy-service/remedy-service-questions/SetRemedyQuestions',
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: RemedyServiceQuestionUpdateDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RemedyServiceQuestionDto>({
      method: 'PUT',
      url: `/api/remedy-service/remedy-service-questions/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
