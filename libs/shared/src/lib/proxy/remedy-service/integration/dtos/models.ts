
export interface CreateRemedyDelegationDto {
  alternate: string;
  startDate?: string;
  endDate?: string;
}

export interface RemedyGetAttachemntResponseDto {
  name?: string;
  sizeBytes?: number;
  link?: string;
}

export interface RemedyGetDelegationResponseDto {
  alternateId?: string;
  status?: string;
  alternate?: string;
  for?: string;
  startDate?: string;
  endDate?: string;
  covering?: string;
  notifyAlternate?: string;
}

export interface RemedyGetWorkInfoResponseDto {
  workInfoID?: string;
  requestNumber?: string;
  summary?: string;
  submitter?: string;
  workInfoType?: string;
  instanceId?: string;
  notes?: string;
  attachments: RemedyGetAttachemntResponseDto[];
}
