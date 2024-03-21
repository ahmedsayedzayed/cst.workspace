
export interface AdvertismentAdminDto {
  titleEn?: string;
  titleAr?: string;
  contentEn?: string;
  contentAr?: string;
  imageId: number;
  attachmentEnId?: number;
  attachmentArId?: number;
  publishDate?: string;
  concurrencyStamp?: string;
}

export interface AdvertismentCreateDto {
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

export interface AdvertismentUpdateDto {
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
