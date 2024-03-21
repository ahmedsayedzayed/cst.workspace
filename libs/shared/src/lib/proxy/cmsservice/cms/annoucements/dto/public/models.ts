import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { AnnouncmentArchievingStatus } from '../../../../enum/announcment-archieving-status.enum';

export interface AnnoucementPublicDto {
  title?: string;
  content?: string;
  endDate?: string;
  publishDate?: string;
  announcementDepartmentName?: string;
}

export interface AnnoucementPublicListDto {
  id: number;
  title?: string;
}

export interface AnnouncementArchievedDto {
  id: number;
  title?: string;
  content?: string;
  archieveDate?: string;
  publishDate?: string;
  isActive: boolean;
  isRead: boolean;
}

export interface GetArcheiveInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  title?: string;
  content?: string;
  publishDateMin?: string;
  publishDateMax?: string;
  archeiveDateMin?: string;
  archeiveDateMax?: string;
  announcmentArchievingStatus?: AnnouncmentArchievingStatus;
  announcementDepartmentId?: string;
}
