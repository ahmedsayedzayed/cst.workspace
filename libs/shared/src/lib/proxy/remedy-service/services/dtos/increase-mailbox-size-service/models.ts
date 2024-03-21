import type { RequestInputBaseDto } from '../models';
import type { RequestBaseDto } from '../../../shared/models';

export interface IncreaseMailboxSizeInputDto extends RequestInputBaseDto {
  existingMailboxSize?: string;
  justification?: string;
  hasBackupCopy?: string;
  emailArchivingKA?: string;
  checkBackupThere?: string;
  vip?: string;
  approvalFlag?: string;
}

export interface IncreaseMailboxSizeOutputDto extends RequestBaseDto {
  requestFormDetails: IncreaseMailboxSizeInputDto;
}
