import type { AttachmentDto, RequestBaseDto } from '../../shared/models';

export interface RequestInputBaseDto {
  isOnBehalf?: boolean;
  userName?: string;
  instanceId?: string;
  serviceName?: string;
  data: object;
  attachment1: AttachmentDto;
  attachment2: AttachmentDto;
  attachment3: AttachmentDto;
}

export interface RequestNewComputerDetailDto {
  computerType?: string;
  employeeName?: string;
  whoIsComputerFor?: string;
  requestDetails?: string;
  priority?: string;
}

export interface RequestNewComputerInputDto {
  isOnBehalf?: boolean;
  userName?: string;
  computerType?: string;
  employeeName?: string;
  whoIsComputerFor?: string;
  requestDetails?: string;
  priority?: string;
  attachment1: AttachmentDto;
  attachment2: AttachmentDto;
  attachment3: AttachmentDto;
}

export interface RequestNewComputerOutputDto extends RequestBaseDto {
  requestNewComputerDetails: RequestNewComputerDetailDto;
}
