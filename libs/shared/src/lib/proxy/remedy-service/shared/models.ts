import type { ReuqesterDetailsDto } from '../remedy-lookups/models';
import type { RequestStatusEnum } from './request-status-enum.enum';
import type { PagedResultRequestDto } from '@abp/ng.core';

export interface AttachmentDto {
  fileName?: string;
  fileData?: string;
}

export interface RequestBaseDto {
  requesterDetails: ReuqesterDetailsDto;
  onBehalfDetails: ReuqesterDetailsDto;
  requestDetails: RequestDetailDto;
  data: object;
}

export interface RequestDetailDto {
  isOnBehalf?: boolean;
  userName?: string;
  requestInstanceID?: string;
  serviceId?: string;
  srdid?: string;
  requestNo?: string;
  requestStatus?: string;
  requestStatusEnum: RequestStatusEnum;
  requestDate?: string;
  requestLastModefiedDate?: string;
}

export interface DownloadTokenResultDto {
  token?: string;
}

export interface LookupDto<TKey> {
  id: TKey;
  displayName?: string;
}

export interface LookupRequestDto extends PagedResultRequestDto {
  filter?: string;
}

export interface RequestResultDto {
  requestNo?: string;
  processCode?: string;
  systemCode?: string;
}
