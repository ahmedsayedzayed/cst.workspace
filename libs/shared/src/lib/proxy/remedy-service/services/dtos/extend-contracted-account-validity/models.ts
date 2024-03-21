import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface ExtendContractedAccountValidityInputDto extends RequestInputBaseDto {
  accountToBeExtended: string;
  extendedDateFrom?: string;
  extendedDateTo?: string;
  justification: string;
  vip?: string;
  approvalFlag?: string;
}

export interface ExtendContractedAccountValidityOutputDto extends RequestBaseDto {
  requestFormDetails: ExtendContractedAccountValidityInputDto;
}
