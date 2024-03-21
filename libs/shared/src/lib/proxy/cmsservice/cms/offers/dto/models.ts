import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetOffersInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  startDateMin?: string;
  startDateMax?: string;
  endDateMin?: string;
  endDateMax?: string;
  publishDateMin?: string;
  publishDateMax?: string;
  offerTypeId?: number;
}

export interface OfferCreateDto {
  mainImageId: number;
  startDate?: string;
  endDate?: string;
  titleAr: string;
  contentAr: string;
  arAttachmentId?: number;
  titleEn?: string;
  contentEn?: string;
  enAttachmentId?: number;
  hasEnglish: boolean;
  publishDate?: string;
  offerTypeId: number;
  enAttachmentFile?: string;
  arAttachmentFile?: string;
  mainImageFile?: string;
}

export interface OfferDto extends FullAuditedEntityDto<number> {
  mainImageId: number;
  startDate?: string;
  endDate?: string;
  titleAr?: string;
  contentAr?: string;
  arAttachmentId?: number;
  titleEn?: string;
  contentEn?: string;
  enAttachmentId?: number;
  publishDate?: string;
  offerTypeId: number;
  offerTypeName?: string;
  hasEnglish: boolean;
}

export interface OfferUpdateDto {
  mainImageId: number;
  startDate?: string;
  endDate?: string;
  titleAr: string;
  contentAr: string;
  arAttachmentId?: number;
  titleEn?: string;
  contentEn?: string;
  enAttachmentId?: number;
  hasEnglish: boolean;
  publishDate?: string;
  offerTypeId: number;
  enAttachmentFile?: string;
  arAttachmentFile?: string;
  mainImageFile?: string;
}

export interface OfferWithNavigationPropertiesDto {
  id: number;
  mainImageId: number;
  startDate?: string;
  endDate?: string;
  title?: string;
  content?: string;
  attachmentId?: number;
  publishDate?: string;
  offerTypeId: number;
  offerTypeName?: string;
  creationTime?: string;
  hasEnglish: boolean;
}

export interface OffersTypeStatDto {
  offerTypeId: number;
  count: number;
}
