import type { AttachmentDto } from '../shared/models';

export interface ActionHistoryGetDto {
  workInfoID?: string;
  workInfoDate?: string;
  userName?: string;
  employeeName?: string;
  takenAction?: string;
  jobTitle?: string;
  summary?: string;
  notes?: string;
}

export interface ActionHistoryInputDto {
  srInstanceId?: string;
  srRequestNumber?: string;
  notes?: string;
  attachment1: AttachmentDto;
  attachment2: AttachmentDto;
  attachment3: AttachmentDto;
}

export interface WorkInfoGetDto {
  workInfoID?: string;
  workInfoDate?: string;
  userName?: string;
  employeeName?: string;
  summary?: string;
  notes?: string;
  attatchment1FileName?: string;
  attatchment2FileName?: string;
  attatchment3FileName?: string;
}
