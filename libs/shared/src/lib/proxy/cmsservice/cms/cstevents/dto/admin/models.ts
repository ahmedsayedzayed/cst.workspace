import type { LanguageEnum } from '../../../../enum/language-enum.enum';

export interface CSTEventCreateDto {
  titleEn?: string;
  titleAr: string;
  contentEn?: string;
  contentAr: string;
  imageId?: number;
  imageFiles: string;
  attachmentEnId?: number;
  attachmentEnFiles?: string;
  attachmentArId?: number;
  attachmentArFiles?: string;
  publishDate?: string;
  eventDate?: string;
  hasEnglish: boolean;
}

export interface CSTEventExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  lang?: LanguageEnum;
  eventName?: string;
  eventContent?: string;
  eventStartDateMin?: string;
  eventStartDateMax?: string;
  eventEndDateMin?: string;
  eventEndDateMax?: string;
  eventPublishDateMin?: string;
  eventPublishDateMax?: string;
  mainImageIdMin?: number;
  mainImageIdMax?: number;
  secondaryImagesIdMin?: number;
  secondaryImagesIdMax?: number;
}

export interface CSTEventUpdateDto {
  titleEn?: string;
  titleAr: string;
  contentEn?: string;
  contentAr: string;
  imageId?: number;
  imageFiles: string;
  attachmentEnId?: number;
  attachmentEnFiles?: string;
  attachmentArId?: number;
  attachmentArFiles?: string;
  publishDate?: string;
  concurrencyStamp: string;
  eventDate?: string;
  hasEnglish: boolean;
}
