import type { ServiceCategoryDto, ServiceCommonQuestionDto, ServiceSubCategoryDto } from '../../service-common/models';
import type { Status } from '../../../../enum/status.enum';

export interface ServiceCategoryCreateDto {
  nameAr: string;
  nameEn: string;
  icon?: string;
}

export interface ServiceCategoryUpdateDto {
  nameAr: string;
  nameEn: string;
  icon?: string;
}

export interface ServiceCreateDto {
  serviceAr: string;
  serviceEn: string;
  descriptionAr: string;
  descriptionEn: string;
  imageId: number;
  serviceDurationId: string;
  requiredDocumentsAr: string;
  requiredDocumentsEn: string;
  serviceProceduresAr: string;
  serviceProceduresEn: string;
  formType?: number;
  isDefaultService?: boolean;
  redirectUrl: string;
  serviceCategoryId?: string;
  serviceSubCategoryId?: string;
  relatedServices: string[];
  imageFiles?: string;
  serviceCommonQuestions: ServiceCommonQuestionDto[];
  status: Status;
  userManualAttachmentID: number;
  userManualAttachmentFile?: string;
  processCode?: string;
  cstSystemId?: string;
  taskDurationId?: string;
}

export interface ServiceExcelDownloadDto {
  downloadToken?: string;
  filterText?: string;
  serviceAr?: string;
  serviceEn?: string;
  durationMin?: number;
  durationMax?: number;
  status?: Status;
  serviceCategoryId: string[];
  serviceSubCategoryId: string[];
  getFavorite: boolean;
}

export interface ServiceSubCategoryCreateDto {
  nameAr: string;
  nameEn: string;
  serviceCategoryId?: string;
}

export interface ServiceSubCategoryUpdateDto {
  nameAr: string;
  nameEn: string;
  serviceCategoryId?: string;
}

export interface ServiceSubCategoryWithNavigationPropertiesDto {
  serviceSubCategory: ServiceSubCategoryDto;
  serviceCategory: ServiceCategoryDto;
}

export interface ServiceUpdateDto {
  serviceAr: string;
  serviceEn: string;
  descriptionAr: string;
  descriptionEn: string;
  imageId: number;
  serviceDurationId: string;
  requiredDocumentsAr: string;
  requiredDocumentsEn: string;
  serviceProceduresAr: string;
  serviceProceduresEn: string;
  status: Status;
  formType?: number;
  isDefaultService?: boolean;
  redirectUrl: string;
  serviceCategoryId?: string;
  serviceSubCategoryId?: string;
  concurrencyStamp?: string;
  relatedServices: string[];
  imageFiles?: string;
  userManualAttachmentFile?: string;
  serviceCommonQuestions: ServiceCommonQuestionDto[];
  userManualAttachmentID: number;
  processCode?: string;
  cstSystemId?: string;
  taskDurationId?: string;
}
