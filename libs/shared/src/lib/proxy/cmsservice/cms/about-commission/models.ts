import type { OrganizationType } from '../../enum/organization-type.enum';

export interface AboutAttachmentDto {
  arAttachmentId?: number;
  enAttachmentId?: number;
  enAttachmentFile?: string;
  arAttachmentFile?: string;
}

export interface AboutAttachmentViewDto {
  attachmentId?: number;
  attachmentFile?: string;
}

export interface AboutCommissionDto {
  hasEnglish?: boolean;
  aboutUsAr: string;
  aboutUsEn?: string;
  ourRoleAr: string;
  ourRoleEn?: string;
  ourPurposeAr: string;
  ourPurposeEn?: string;
  ourVisionAr: string;
  ourVisionEn?: string;
  ourMissionAr: string;
  ourMissionEn?: string;
  videoCodeAr?: string;
  videoCodeEn?: string;
  backgroundAttachmentId?: number;
  backgroundAttachmentFiles?: string;
  values: AboutCommissionValueDto[];
  strategy: AboutCommissionStrategyDto;
}

export interface AboutCommissionGetDto {
  aboutUs?: string;
  ourRole?: string;
  ourPurpose?: string;
  ourVision?: string;
  ourMission?: string;
  videoCode?: string;
  backgroundAttachmentId?: number;
  backgroundAttachmentFiles?: string;
  values: AboutCommissionValueGetDto[];
  strategy: AboutCommissionStrategyGetDto;
}

export interface AboutCommissionStrategyDto {
  strategyTitleAr: string;
  strategyTitleEn?: string;
  strategyDescriptionAr: string;
  strategyDescriptionEn?: string;
  arAttachmentId?: number;
  enAttachmentId?: number;
  enAttachmentFile?: string;
  arAttachmentFile?: string;
}

export interface AboutCommissionStrategyGetDto {
  strategyTitle?: string;
  strategyDescription?: string;
  attachmentId?: number;
  attachmentFile?: string;
}

export interface AboutCommissionValueDto {
  backgroundImageId?: number;
  backgroundImageFiles?: string;
  valueNameAr: string;
  valueNameEn?: string;
  valueDescriptionAr: string;
  valueDescriptionEn?: string;
}

export interface AboutCommissionValueGetDto {
  backgroundImageId?: number;
  backgroundImageFiles?: string;
  valueName?: string;
  valueDescription?: string;
}

export interface HistoricalOverviewDto {
  hasEnglish?: boolean;
  titleAr?: string;
  titleEn?: string;
  timeline: TimelineDto[];
}

export interface HistoricalOverviewGetDto {
  title?: string;
  timeline: TimelineGetDto[];
}

export interface MainDepartmentDto {
  hasEnglish?: boolean;
  nameAr: string;
  nameEn?: string;
  mainDepartmentTasks: MainDepartmentTaskDto[];
  subDepartments: SubDepartmentDto[];
}

export interface MainDepartmentTaskDto {
  nameAr: string;
  nameEn?: string;
}

export interface MainDepartmentViewDto extends NameViewDto {
  mainDepartmentTasks: NameViewDto[];
  subDepartments: NameViewDto[];
}

export interface NameViewDto {
  name?: string;
}

export interface OrganizationalChartDto {
  id?: string;
  parentId?: string;
  title?: string;
  managerName?: string;
  isDirectorate: boolean;
  organizationType: OrganizationType;
  managerUsername?: string;
  managerEmployeeId?: string;
}

export interface SectorAchievementDto {
  sectorAchievementsAr: string;
  sectorAchievementsEn?: string;
}

export interface SectorDto {
  id?: number;
  hasEnglish?: boolean;
  titleAr: string;
  titleEn?: string;
  descriptionAr: string;
  descriptionEn?: string;
  sectorAchievements: SectorAchievementDto[];
  sectorNumbers: SectorNumberDto[];
  mainDepartments: MainDepartmentDto[];
}

export interface SectorNumberDto {
  sectorNumbersAr: string;
  sectorNumbersEn?: string;
  number: string;
}

export interface SectorNumberViewDto extends NameViewDto {
  number?: string;
}

export interface SectorViewDto {
  id?: number;
  title?: string;
  description?: string;
}

export interface SectorViewWithDetailsDto extends SectorViewDto {
  sectorAchievements: NameViewDto[];
  sectorNumbers: SectorNumberViewDto[];
  mainDepartments: MainDepartmentViewDto[];
}

export interface SubDepartmentDto {
  nameAr: string;
  nameEn?: string;
}

export interface TimelineDto {
  phasePeriod?: string;
  phaseTitleAr?: string;
  phaseTitleEn?: string;
  phaseDescriptionAr?: string;
  phaseDescriptionEn?: string;
}

export interface TimelineGetDto {
  phasePeriod?: string;
  phaseName?: string;
  phaseTitle?: string;
  phaseDescription?: string;
}
