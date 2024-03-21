import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetRemedyServiceQuestionsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  requestID?: string;
  locale?: string;
  srd_ID?: string;
  srdInstanceID_DispProp?: string;
  questionSRD_InstanceID?: string;
  questionDef_InstanceID?: string;
  questionnaire?: string;
  type?: string;
  format?: string;
  text_Trunc?: string;
  question_User_Format?: string;
  question_Hidden?: string;
  sort_IntMin?: number;
  sort_IntMax?: number;
  menu_Label?: string;
  menu_Value?: string;
  required?: string;
  defaultResponse?: string;
  rangeMinValue?: string;
  rangeMaxValue?: string;
  menuSourceForm?: string;
  menuSourceQualification?: string;
  menuLabelSourceField?: string;
  menuValueSourceField?: string;
  question_OrderMin?: number;
  question_OrderMax?: number;
  question_Text?: string;
}

export interface RemedyServiceQuestionCreateDto {
  requestID?: string;
  locale?: string;
  srd_ID?: string;
  srdInstanceID_DispProp?: string;
  questionSRD_InstanceID?: string;
  questionDef_InstanceID?: string;
  questionnaire?: string;
  type?: string;
  format?: string;
  text_Trunc?: string;
  question_User_Format?: string;
  question_Hidden?: string;
  sort_Int: number;
  menu_Label?: string;
  menu_Value?: string;
  required?: string;
  defaultResponse?: string;
  rangeMinValue?: string;
  rangeMaxValue?: string;
  menuSourceForm?: string;
  menuSourceQualification?: string;
  menuLabelSourceField?: string;
  menuValueSourceField?: string;
  question_Order: number;
  question_Text?: string;
}

export interface RemedyServiceQuestionDto extends FullAuditedEntityDto<number> {
  requestID?: string;
  locale?: string;
  srd_ID?: string;
  srdInstanceID_DispProp?: string;
  questionSRD_InstanceID?: string;
  questionDef_InstanceID?: string;
  questionnaire?: string;
  type?: string;
  format?: string;
  text_Trunc?: string;
  question_User_Format?: string;
  question_Hidden?: string;
  sort_Int: number;
  menu_Label?: string;
  menu_Value?: string;
  required?: string;
  defaultResponse?: string;
  rangeMinValue?: string;
  rangeMaxValue?: string;
  menuSourceForm?: string;
  menuSourceQualification?: string;
  menuLabelSourceField?: string;
  menuValueSourceField?: string;
  question_Order: number;
  question_Text?: string;
  concurrencyStamp?: string;
}

export interface RemedyServiceQuestionUpdateDto {
  requestID?: string;
  locale?: string;
  srd_ID?: string;
  srdInstanceID_DispProp?: string;
  questionSRD_InstanceID?: string;
  questionDef_InstanceID?: string;
  questionnaire?: string;
  type?: string;
  format?: string;
  text_Trunc?: string;
  question_User_Format?: string;
  question_Hidden?: string;
  sort_Int: number;
  menu_Label?: string;
  menu_Value?: string;
  required?: string;
  defaultResponse?: string;
  rangeMinValue?: string;
  rangeMaxValue?: string;
  menuSourceForm?: string;
  menuSourceQualification?: string;
  menuLabelSourceField?: string;
  menuValueSourceField?: string;
  question_Order: number;
  question_Text?: string;
  concurrencyStamp?: string;
}
