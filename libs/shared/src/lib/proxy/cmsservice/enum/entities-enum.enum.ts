import { mapEnumToOptions } from '@abp/ng.core';

export enum EntitiesEnum {
  News = 1,
  Offers = 2,
  Events = 3,
  Advertisments = 4,
  Calendar = 5,
  Announcements = 6,
  Documents = 7,
  FAQs = 8,
  Services = 9,
  Surveys = 10,
  Medias = 11,
}

export const entitiesEnumOptions = mapEnumToOptions(EntitiesEnum);
