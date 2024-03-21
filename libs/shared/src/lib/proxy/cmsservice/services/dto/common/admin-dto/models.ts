import type { ServiceDto } from '../../service-common/custom-service-dto/models';
import type { CSTSystemDto } from '../../../models';
import type { ServiceDurationDto } from '../../admin/models';
import type { RelatedServiceDto, ServiceCategoryDto, ServiceCommonQuestionDto, ServiceSubCategoryDto } from '../../service-common/models';

export interface ServiceCanChangeDefaultDto {
  canChangeDefaultService: boolean;
}

export interface ServiceWithNavigationPropertiesDto {
  service: ServiceDto;
  cstSystem: CSTSystemDto;
  serviceDuration: ServiceDurationDto;
  serviceCategory: ServiceCategoryDto;
  relatedServices: RelatedServiceDto[];
  serviceCommonQuestions: ServiceCommonQuestionDto[];
  serviceSubCategory: ServiceSubCategoryDto;
  canChangeDefaultService: boolean;
  userName?: string;
}
