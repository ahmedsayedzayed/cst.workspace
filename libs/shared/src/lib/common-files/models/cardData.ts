export interface ICardData {
  imageAttachmentId?: number | string;
  publishDate?: string;
  title?: string;
  text?: string;
  images?: [];
  status?: number;
  imageAttachment?: number | string;
  serviceUrl?: string;
  galleryServiceUrl?: string;
  id?: number;
  content?: string;
  endDate?: string;
  startDate?: string;
  entityName?: string;
  galleryEntityName?: string;
  attachmentId?:number
}
export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
export interface HeaderData {
  title: string;
  image: string;
  links: string;
}
