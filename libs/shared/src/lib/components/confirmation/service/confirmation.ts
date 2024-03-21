import { LocalizationParam } from '@abp/ng.core';

export namespace SWConfirmation {
  export interface SWOptions {
    id?: any;
    dismissible?: boolean;
    messageLocalizationParams?: string[];
    titleLocalizationParams?: string[];
    hideCancelBtn?: boolean;
    hideYesBtn?: boolean;
    cancelText?: LocalizationParam;
    yesText?: LocalizationParam;
    icon?: string;
    iconTemplate?: string;
    yesSeverity?: string;
    subMessageSeverity?: string;
    subMessageIcon?: string;
  }

  export interface SWDialogData {
    message: LocalizationParam;
    title?: LocalizationParam;
    subMessage?: LocalizationParam;
    severity?: SWSeverity;
    options?: Partial<SWOptions>;
  }

  export type SWSeverity = 'neutral' | 'success' | 'info' | 'warning' | 'error';

  export enum SWStatus {
    confirm = 'confirm',
    reject = 'reject',
    dismiss = 'dismiss',
  }
}
