import { Injectable } from '@angular/core';
import { finalize, firstValueFrom, of, switchMap } from 'rxjs';
import { AttachmentDownloadService } from './attachment-download.service';
import { EnvironmentService } from '@abp/ng.core';

const TOKEN = 'image_token';
@Injectable({
  providedIn: 'root'
})
export class Base64DirectLinkService {
  // private _token: string ;
  private isPendingRequest: boolean;
  public getKey(moduleName) {
    return `${TOKEN} + '_' + ${btoa(moduleName)}`;
  }
  public token(moduleName: string) {
    return localStorage.getItem(this.getKey(moduleName));
  }
  constructor(
    private attachmentDetailsService: AttachmentDownloadService,
    private env: EnvironmentService
  ) {}
  async getImageUrlLink(
    moduleName: string,
    attachmentDetailId: number,
    entity: string,
    isAttachmentDetails: boolean
  ): Promise<string> {
    if (this.isPendingRequest) {
      await delay(1000);
      return this.getImageUrlLink(
        moduleName,
        attachmentDetailId,
        entity,
        isAttachmentDetails
      );
    }
    if (this.token(moduleName)) {
      return Promise.resolve(
        this._getAttachmentDetailsURL(moduleName, attachmentDetailId, entity, isAttachmentDetails)
      );
    } else {
      this.isPendingRequest = true;
      return firstValueFrom(
        this.attachmentDetailsService.getDownloadToken(moduleName).pipe(
          finalize(() => (this.isPendingRequest = false)),
          switchMap(res => {
            localStorage.setItem(this.getKey(moduleName), res.token);
            return of(
              this._getAttachmentDetailsURL(
                moduleName,
                attachmentDetailId,
                entity,
                isAttachmentDetails
              )
            );
          })
        )
      );
    }
  }
  clear(moduleName: string) {
    localStorage.removeItem(this.getKey(moduleName));
  }
  private _getAttachmentDetailsURL(
    moduleName: string,
    attachmentDetailId: number,
    entity: string,
    isAttachmentDetails: boolean
  ) {
    if (isAttachmentDetails) {
      return `${
        this.env.getEnvironment().apis.default.url
      }/api/${moduleName}/DownloadAttachmentDetailImage?id=${attachmentDetailId}&entity=${entity}&downloadToken=${this.token(
        moduleName
      )}`;
    } else {
      return `${
        this.env.getEnvironment().apis.default.url
      }/api/${moduleName}/DownloadAttachmentImage?attachmentId=${attachmentDetailId}&entity=${entity}&downloadToken=${this.token(
        moduleName
      )}`;
    }
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
