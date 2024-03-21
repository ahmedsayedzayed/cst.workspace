import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { Status } from '../../../../enum/status.enum';

export interface ServiceDto extends FullAuditedEntityDto<string> {
  serviceAr?: string;
  serviceEn?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  imageId: number;
  serviceDurationId?: string;
  serviceDuration?: string;
  requiredDocumentsAr?: string;
  requiredDocumentsEn?: string;
  serviceProceduresAr?: string;
  serviceProceduresEn?: string;
  formType?: number;
  redirectUrl?: string;
  serviceCategoryId?: string;
  serviceSubCategoryId?: string;
  isFavorite: boolean;
  isDefaultService: boolean;
  status: Status;
  concurrencyStamp?: string;
  creatorName?: string;
  userManualAttachmentID?: number;
  processCode?: string;
  cstSystemId?: string;
  taskDurationId?: string;
}
