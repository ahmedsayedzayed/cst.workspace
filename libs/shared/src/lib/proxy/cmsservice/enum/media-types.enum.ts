import { mapEnumToOptions } from '@abp/ng.core';

export enum MediaTypes {
  Image = 1,
  Youtube = 2,
}

export const mediaTypesOptions = mapEnumToOptions(MediaTypes);
