import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { LanguageEnum } from '../../../../enum/language-enum.enum';
import type { Status } from '../../../../enum/status.enum';
import type { QuestionsDTO, UserSurveysDTO } from '../common/models';

export interface AnswersResultDTO {
  id?: number;
  questionsId?: number;
  answer?: string;
  totalResult: number;
}

export interface GetSurveysInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  id?: number;
  title?: string;
  sectorId?: number;
  mainDepartmentId?: number;
  secondaryDepartmentId?: number;
  endDateMin?: string;
  endDateMax?: string;
  publishDateMin?: string;
  publishDateMax?: string;
  lang?: LanguageEnum;
  status?: Status;
  userId?: string;
}

export interface QuestionsResultDTO {
  id: number;
  question?: string;
  numberOfParticipates: number;
  answers: AnswersResultDTO[];
}

export interface SurveyAdminDTO {
  id: number;
  lang: LanguageEnum;
  title?: string;
  content?: string;
  publishDate?: string;
  endDate?: string;
  creatorName?: string;
  status: Status;
  mainDepartmentName?: string;
  secondaryDepartmentName?: string;
  sectorName?: string;
  questions: QuestionsDTO[];
  userSurveys: UserSurveysDTO[];
}

export interface SurveyAdminListDto {
  id: number;
  lang: LanguageEnum;
  title?: string;
  publishDate?: string;
  status: Status;
  mainDepartmentName?: string;
  secondaryDepartmentName?: string;
  sectorName?: string;
}

export interface SurveyAdminResultDTO {
  id: number;
  title?: string;
  content?: string;
  publishDate?: string;
  endDate?: string;
  creatorName?: string;
  status: Status;
  mainDepartmentName?: string;
  secondaryDepartmentName?: string;
  sectorName?: string;
  numberOfParticipates: number;
  questions: QuestionsResultDTO[];
}

export interface SurveyCreateDto {
  title: string;
  content: string;
  sectorId: number;
  mainDepartmentId: number;
  secondaryDepartmentId: number;
  endDate?: string;
  lang: LanguageEnum;
  status: Status;
  questionsList: QuestionsDTO[];
}

export interface SurveyDto extends FullAuditedEntityDto<number> {
  title?: string;
  content?: string;
  sectorId: number;
  mainDepartmentId: number;
  secondaryDepartmentId: number;
  endDate?: string;
}

export interface SurveyExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  id?: number;
  title?: string;
  sectorId?: number;
  mainDepartmentId?: number;
  secondaryDepartmentId?: number;
  endDateMin?: string;
  endDateMax?: string;
  publishDateMin?: string;
  publishDateMax?: string;
  lang?: LanguageEnum;
  status?: Status;
  userId?: string;
}

export interface SurveyUpdateDto {
  title: string;
  content: string;
  sectorId: number;
  mainDepartmentId: number;
  secondaryDepartmentId: number;
  endDate?: string;
  lang: LanguageEnum;
  status: Status;
  questionsList: QuestionsDTO[];
}
