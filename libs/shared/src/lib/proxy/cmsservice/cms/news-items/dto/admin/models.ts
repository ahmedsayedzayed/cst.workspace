
export interface NewsItemCreateDto {
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
  hasEnglish: boolean;
}

export interface NewsItemExcelDownloadDto {
  title?: string;
  minDate?: string;
  maxDate?: string;
  downloadToken?: string;
}

export interface NewsItemUpdateDto {
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
  hasEnglish: boolean;
}
