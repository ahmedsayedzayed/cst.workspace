import type { PagedResultRequestDto } from '@abp/ng.core';

export interface LookupDtoGuid {
  id?: string;
  displayName?: string;
}

export interface LookupRequestDto extends PagedResultRequestDto {
  filter?: string;
}

export interface TargetAudienceLookUpDto {
  id?: string;
  displayName?: string;
}

export interface LookupDtoInt {
  id: number;
  displayName?: string;
}

export interface LookupDtoLong {
  id: number;
  displayName?: string;
}
