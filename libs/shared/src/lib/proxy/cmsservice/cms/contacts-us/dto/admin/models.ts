import type { FullAuditedEntityDto } from '@abp/ng.core';
import type { ContactUsEnum } from '../../../../enum/contact-us-enum.enum';

export interface ContackUsDto extends FullAuditedEntityDto<number> {
  contactUsTypeId: number;
  body?: string;
  concurrencyStamp?: string;
}

export interface ContactUsTypesDto {
  types: TypesDTO[];
}

export interface TypesDTO {
  contactUsEnum: ContactUsEnum;
  emails?: string;
  phoneNumber?: string;
  url?: string;
}
