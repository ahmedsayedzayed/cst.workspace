import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { LocalizationService, EnvironmentService, RestService, PagedResultDto } from '@abp/ng.core';
import { AttachmentDetailDto } from '../model/proxy-model';
import { FileBlobData } from '../../../proxy/cmsservice';


type attachmentDataTypes = number | null | undefined;
type entityDateTypes = string | null | undefined;

@Injectable()
export class AttachmentService {
  localization: LocalizationService;
  moduleName: string;
  private apiName = 'Default';
  constructor(
    injector: Injector,
    private environment: EnvironmentService,
    private restService: RestService
  ) {
    this.localization = injector.get(LocalizationService);
  }
  getAllByAttachmentId(
    attachmentId: attachmentDataTypes,
    entity: entityDateTypes,
    asTime: entityDateTypes
  ): Observable<PagedResultDto<AttachmentDetailDto>> {
    let input;
    input = {
      attachmentId,
      entity,
      asTime,
      maxResultCount: 100
    };
    return this.restService.request<unknown, PagedResultDto<AttachmentDetailDto>>(
      {
        method: 'GET',
        url: `/api/${this.moduleName}/Attachment_GetListAsync`,
        params: {
          filterText: input.filterText,
          fileName: input.fileName,
          extension: input.extension,
          fileSizeMin: input.fileSizeMin,
          fileSizeMax: input.fileSizeMax,
          attachmentStatus: input.attachmentStatus,
          attachmentRef: input.attachmentRef,
          externalId: input.externalId,
          entity: input.entity,
          attachmentDetailFileId: input.attachmentDetailFileId,
          attachmentId: input.attachmentId,
          asTime: input.asTime,
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount
        },
      },
      { apiName: this.apiName }
    );
  }
  deleteAttachment(
    attachmentDetailId: number | null | undefined,
    entity: string | null | undefined
  ): Observable<void> {
    return this.restService.request<unknown, void>(
      {
        method: 'DELETE',
        url: `/api/${this.moduleName}/Attachment_DeleteAsync/${attachmentDetailId}/${entity}`
      },
      { apiName: this.apiName }
    );
  }
  downloadAttachment(
    attachmentDetailId: number | null | undefined,
    entity: string | null | undefined
  ): Observable<FileBlobData> {
    return this.restService.request<unknown, FileBlobData>(
      {
        method: 'GET',
        url: `/api/${this.moduleName}/DownloadAttachmentDetailBlob?id=${attachmentDetailId}&entity=${entity}`
      },
      { apiName: this.apiName }
    );
  }
  getActionUrl(): string {
    const baseUrl = this.environment.getApiUrl('default');
    return `${baseUrl}/api/${this.moduleName}/CreateAttachment`;
  }
  // getDownloadUrl(): string {
  //   const baseUrl = this.environment.getApiUrl('default');
  //   return `${baseUrl}/api/${this.moduleName}/DownloadAttachment`;
  // }
  l(key: string): string {
    return this.localization.instant('::' + key);
  }
}
