import { MediaTypes } from "../../proxy/cmsservice/enum";

export interface MediaPreviewInput {
  mediaType: MediaTypes;
  title?: string;
  youtubeCode?: string;
  images?: number[];
  attachmentImageId: number;
  entity?: string;
  module?: string;
  selectedIndex?: number;
}