import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface OpenFirewallPortsInputDto extends RequestInputBaseDto {
  type: string;
  serverEnvironment: string;
  source: string;
  destination: string;
  portNumber: string;
  justification: string;
  vip?: string;
  manager?: string;
  approvalFlag?: string;
}

export interface OpenFirewallPortsOutputDto extends RequestBaseDto {
  requestFormDetails: OpenFirewallPortsInputDto;
}
