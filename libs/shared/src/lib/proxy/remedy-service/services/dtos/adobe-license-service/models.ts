import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface AdobeLicenseRequestInputDto extends RequestInputBaseDto {
  adobeType: string[];
  adobeTypeForSend?: string;
  pleaseSpecify?: string;
  existingLicense?: string;
  justification?: string;
  vip?: string;
  approvalFlag?: string;
}

export interface AdobeLicenseRequestOutputDto extends RequestBaseDto {
  requestFormDetails: AdobeLicenseRequestInputDto;
}
