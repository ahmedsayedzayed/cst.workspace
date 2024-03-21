import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface RequestPermissionOnServiceAccountInputDto extends RequestInputBaseDto {
  mailServiceAccountName?: string;
  permissionType?: string;
  justification?: string;
  approvalFlag?: string;
  vip?: string;
}

export interface RequestPermissionOnServiceAccountOutputDto extends RequestBaseDto {
  requestFormDetails: RequestPermissionOnServiceAccountInputDto;
}
