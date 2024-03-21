
export interface AnswersDTO {
  id?: number;
  questionsId?: number;
  answer: string;
}

export interface QuestionsDTO {
  id?: number;
  question: string;
  answers: AnswersDTO[];
}

export interface UserSurveysDTO {
  id: number;
  userId?: string;
  surveyId: number;
}
