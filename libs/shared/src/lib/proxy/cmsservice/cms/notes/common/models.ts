import type { FullAuditedEntityDto } from '@abp/ng.core';

export interface NoteCreateDto {
  noteText: string;
  isDone: boolean;
}

export interface NoteDto extends FullAuditedEntityDto<number> {
  noteText?: string;
  isDone: boolean;
}

export interface NoteUpdateDto {
  noteText: string;
  isDone: boolean;
}
