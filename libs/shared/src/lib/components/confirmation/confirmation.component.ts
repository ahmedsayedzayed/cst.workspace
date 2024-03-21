import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SWConfirmation } from './service/confirmation';
import { SWConfirmationIcons } from './token/confirmation-icons.token';

@Component({
  selector: 'app-sw-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class SWConfirmationComponent {
  icons: SWConfirmationIcons = {
    info: 'icon-information-circle',
    success: 'icon-check-circle',
    warning: 'icon-exclamation',
    error: 'icon-exclamation-circle',
    default: '',
    neutral: '',
  };
  constructor() {}

  confirm = SWConfirmation.SWStatus.confirm;
  reject = SWConfirmation.SWStatus.reject;
  dismiss = SWConfirmation.SWStatus.dismiss;

  confirmation$!: ReplaySubject<SWConfirmation.SWDialogData | null>;

  clear!: (status: SWConfirmation.SWStatus) => void;

  close(status: SWConfirmation.SWStatus) {
    this.clear(status);
  }

  getIconClass({ severity, options }: SWConfirmation.SWDialogData): string {
    if (options && options.icon) {
      return options.icon;
    }
    if (!this.icons) {
      return '';
    }
    if (severity) {
      return this.icons[severity];
    }
    return this.icons.default;
  }

  isCustomIconExists({ options }: SWConfirmation.SWDialogData): boolean {
    return !!(options && (options.iconTemplate || options.icon));
  }

  isIconTemplateExits({ options }: SWConfirmation.SWDialogData): boolean {
    return !!(options && options.iconTemplate);
  }

  getAlertClass({ severity, options }: SWConfirmation.SWDialogData): string {
    switch (options.subMessageSeverity) {
      default:
      case 'neutral':
      case 'success':
      case 'warning':
        return 'text-muted';
      case 'info':
        return 'alert alert-info';
      case 'error':
        return 'alert alert-danger';
    }
  }
}
