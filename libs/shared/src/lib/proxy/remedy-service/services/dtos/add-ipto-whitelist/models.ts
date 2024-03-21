import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface AddIPToWhitelistInputDto extends RequestInputBaseDto {
  ipAddress: string;
  justification: string;
  manager?: string;
  approvalFlag?: string;
}

export interface AddIPToWhitelistOutputDto extends RequestBaseDto {
  requestFormDetails: AddIPToWhitelistInputDto;
}
