
export interface AnnoucementAdminListDto {
  id: number;
  content?: string;
  title?: string;
  endDate?: string;
  publishDate?: string;
  creationTime?: string;
  isActive: boolean;
  canEdit: boolean;
  canDelete: boolean;
  announcementDepartmentName?: string;
}
