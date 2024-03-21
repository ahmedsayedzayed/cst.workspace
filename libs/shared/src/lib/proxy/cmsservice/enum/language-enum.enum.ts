import { mapEnumToOptions } from '@abp/ng.core';

export enum LanguageEnum {
  Ar = 0,
  En = 1,
}

export const languageEnumOptions = mapEnumToOptions(LanguageEnum);
