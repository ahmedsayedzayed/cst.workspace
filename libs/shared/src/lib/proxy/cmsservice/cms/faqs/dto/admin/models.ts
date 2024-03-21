import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface FAQAdminDto extends FullAuditedEntityDto<number> {
  questionAr?: string;
  answerAr?: string;
  questionEn?: string;
  answerEn?: string;
  faqDate?: string;
  creatorId?: string;
  userName?: string;
  hasEnglish: boolean;
}

export interface FAQCreateDto {
  questionAr: string;
  answerAr: string;
  questionEn?: string;
  answerEn?: string;
  hasEnglish: boolean;
}

export interface FAQUpdateDto {
  questionAr: string;
  answerAr: string;
  questionEn?: string;
  answerEn?: string;
  hasEnglish: boolean;
}

export interface GetFAQSInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
}
