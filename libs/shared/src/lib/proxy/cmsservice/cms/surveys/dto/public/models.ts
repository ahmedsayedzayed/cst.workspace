import type { QuestionsDTO, UserSurveysDTO } from '../common/models';

export interface AnswersInput {
  questionId: number;
  answerId: number;
}

export interface ParticipateInput {
  surveyId: number;
  questions: AnswersInput[];
}

export interface SurveyPublicDTO {
  id: number;
  title?: string;
  content?: string;
  userName?: string;
  sectorName?: string;
  mainDepartmentName?: string;
  secondaryDepartmentName?: string;
  questions: QuestionsDTO[];
  userSurveys: UserSurveysDTO[];
  publishDate?: string;
}

export interface SurveyPublicListDTO {
  id: number;
  participated: boolean;
  title?: string;
  creationTime?: string;
  content?: string;
}
