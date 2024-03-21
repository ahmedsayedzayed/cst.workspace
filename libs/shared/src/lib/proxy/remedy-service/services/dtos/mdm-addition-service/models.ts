import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface MdmAdditionInputDto extends RequestInputBaseDto {
  deviceType?: string;
  operatingSystem?: string;
  justification?: string;
  isMultifactorAuthenticatorActivated?: string;
  note?: string;
  proceedFlag?: string;
}

export interface MdmAdditionOutputDto extends RequestBaseDto {
  requestFormDetails: MdmAdditionInputDto;
}
