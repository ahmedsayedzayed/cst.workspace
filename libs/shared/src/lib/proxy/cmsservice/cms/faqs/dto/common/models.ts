
export interface FAQDto {
  id: number;
  question?: string;
  answer?: string;
  faqDate?: string;
  creatorId?: string;
  userName?: string;
}

export interface FaqPublicDto {
  question?: string;
  answer?: string;
}
