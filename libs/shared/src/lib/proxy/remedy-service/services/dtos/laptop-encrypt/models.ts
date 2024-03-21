import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface LaptopEncryptInputDto extends RequestInputBaseDto {
  laptopType: string;
  computerName: string;
  justification: string;
}

export interface LaptopEncryptOutputDto extends RequestBaseDto {
  requestFormDetails: LaptopEncryptInputDto;
}
