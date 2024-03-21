import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface OpenPortOnWindowsServerInputDto extends RequestInputBaseDto {
  serverName?: string;
  serverIpAddress?: string;
  serverEnvironment?: string;
  portNumber?: string;
  direction?: string;
  source?: string;
  destination?: string;
  description?: string;
  vip?: string;
  approvalFlag?: string;
}

export interface OpenPortOnWindowsServerOutputDto extends RequestBaseDto {
  requestFormDetails: OpenPortOnWindowsServerInputDto;
}
