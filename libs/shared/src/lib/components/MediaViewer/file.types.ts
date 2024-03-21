import { mapEnumToOptions } from '@abp/ng.core';

export enum FileTypes {
  ImageFile = 7,
  PDF_File = 8,
  Movie_File = 9,
  Word_File = 10,
  Excel_File = 11,
  PowerPoint_File = 12,
  Audio_File = 13,
}

export const fileTypesOptions = mapEnumToOptions(FileTypes);
