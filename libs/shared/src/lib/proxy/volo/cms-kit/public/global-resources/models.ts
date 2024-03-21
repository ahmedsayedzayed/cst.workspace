import type { ExtensibleAuditedEntityDto } from '@abp/ng.core';

export interface GlobalResourceDto extends ExtensibleAuditedEntityDto {
  name?: string;
  value?: string;
}
