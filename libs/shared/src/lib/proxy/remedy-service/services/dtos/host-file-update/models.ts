import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface HostFileUpdateInputDto extends RequestInputBaseDto {
  justification: string;
}

export interface HostFileUpdateOutputDto extends RequestBaseDto {
  requestFormDetails: HostFileUpdateInputDto;
}
