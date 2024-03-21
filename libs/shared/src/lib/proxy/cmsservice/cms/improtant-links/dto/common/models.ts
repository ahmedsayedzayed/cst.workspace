import type { FullAuditedEntityDto } from '@abp/ng.core';

export interface ImprotantLinkCreateDto {
  link: string;
  title?: string;
}

export interface ImprotantLinkDto extends FullAuditedEntityDto<number> {
  link?: string;
  title?: string;
}

export interface ImprotantLinkUpdateDto {
  link: string;
  title?: string;
}
