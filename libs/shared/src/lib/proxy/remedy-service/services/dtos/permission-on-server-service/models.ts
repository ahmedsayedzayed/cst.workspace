import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface PermissionOnServerInputDto extends RequestInputBaseDto {
  serverIp?: string;
  serverHostName?: string;
  serverEnvironment?: string;
  requestType?: string;
  permissionRequired?: string;
  selectGroupName?: string;
  connectionType?: string;
  justification?: string;
  approvalFlag?: string;
  note?: string;
  vip?: string;
}

export interface PermissionOnServerOutputDto extends RequestBaseDto {
  requestFormDetails: PermissionOnServerInputDto;
}
