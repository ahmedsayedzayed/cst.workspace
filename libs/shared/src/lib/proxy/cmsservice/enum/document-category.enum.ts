import { mapEnumToOptions } from '@abp/ng.core';

export enum DocumentCategory {
  Rule = 1,
  Form = 2,
  RefrenceGuide = 3,
  InternalPolicy = 4,
}

export const documentCategoryOptions = mapEnumToOptions(DocumentCategory);
