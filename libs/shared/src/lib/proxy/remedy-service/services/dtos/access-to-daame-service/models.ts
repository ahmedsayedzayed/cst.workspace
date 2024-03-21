import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface AccessToDameeCreateDto extends RequestInputBaseDto {
  jobTitle?: string;
  supportGroup?: string;
  permissionRequired?: string;
  justification?: string;
  vip?: string;
  approvalFlag?: string;
}

export interface AccessToDameeRequestOutputDto extends RequestBaseDto {
  requestFormDetails: AccessToDameeCreateDto;
}
