import { mapEnumToOptions } from '@abp/ng.core';

export enum ContactUsEnum {
  Suggestion = 1001,
  Report = 1002,
  Inquiry = 1003,
  ContactUs = 1004,
  Phone_Footer = 1005,
  Email_Footer = 1006,
  TechnicalSupport = 1007,
  TechnicalAssistance = 1008,
}

export const contactUsEnumOptions = mapEnumToOptions(ContactUsEnum);
