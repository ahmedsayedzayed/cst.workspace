import { ContentProjectionService, LocalizationParam, PROJECTION_STRATEGY } from '@abp/ng.core';
import { ComponentRef, Injectable } from '@angular/core';
import { fromEvent, Observable, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { SWConfirmation } from './confirmation';
import { SWConfirmationComponent } from '../confirmation.component';
@Injectable({ providedIn: 'root' })
export class SWConfirmationService {
  status$!: Subject<SWConfirmation.SWStatus>;
  confirmation$ = new ReplaySubject<SWConfirmation.SWDialogData | null>(1);

  private containerComponentRef!: ComponentRef<SWConfirmationComponent>;

  clear = (status: SWConfirmation.SWStatus = SWConfirmation.SWStatus.dismiss) => {
    this.confirmation$.next(null);
    this.status$.next(status);
  };

  constructor(private contentProjectionService: ContentProjectionService) {}

  private setContainer() {
    this.containerComponentRef = this.contentProjectionService.projectContent(
      PROJECTION_STRATEGY.AppendComponentToBody(SWConfirmationComponent, {
        confirmation$: this.confirmation$,
        clear: this.clear}));

    setTimeout(() => {
      this.containerComponentRef.changeDetectorRef.detectChanges();
    }, 0);
  }

  info(
    message: LocalizationParam,
    title: LocalizationParam,
    subMessage?: LocalizationParam,
    options?: Partial<SWConfirmation.SWOptions>): Observable<SWConfirmation.SWStatus> {
    return this.show(message, title, 'info', options, subMessage);
  }

  success(
    message: LocalizationParam,
    title: LocalizationParam,
    subMessage?: LocalizationParam,
    options?: Partial<SWConfirmation.SWOptions>): Observable<SWConfirmation.SWStatus> {
    if (!options) {
      options = {};
    }
    options.hideYesBtn = true;
    return this.show(message, title, 'success', options, subMessage);
  }

  warn(
    message: LocalizationParam,
    title: LocalizationParam,
    subMessage?: LocalizationParam,
    options?: Partial<SWConfirmation.SWOptions>): Observable<SWConfirmation.SWStatus> {
    return this.show(message, title, 'warning', options, subMessage);
  }

  error(
    message: LocalizationParam,
    title: LocalizationParam,
    subMessage?: LocalizationParam,
    options?: Partial<SWConfirmation.SWOptions>): Observable<SWConfirmation.SWStatus> {
    if (!options) {
      options = {};
    }
    options.hideYesBtn = true;
    return this.show(message, title, 'error', options, subMessage);
  }

  show(
    message: LocalizationParam,
    title: LocalizationParam,
    severity?: SWConfirmation.SWSeverity,
    options = {} as Partial<SWConfirmation.SWOptions>,
    subMessage?: LocalizationParam): Observable<SWConfirmation.SWStatus> {
    if (!this.containerComponentRef){
      this.setContainer();
    }
    this.confirmation$.next({
      message,
      title,
      subMessage,
      severity: severity || 'neutral',
      options});

    this.status$ = new Subject();
    const { dismissible = true } = options;
    if (dismissible){
      this.listenToEscape();
    }

    return this.status$;
  }

  private listenToEscape() {
    fromEvent<KeyboardEvent>(document, 'keyup')
      .pipe(
        takeUntil(this.status$),
        debounceTime(150),
        filter((key: KeyboardEvent) => key && key.key === 'Escape'))
      .subscribe(() => {
        this.clear();
      });
  }
}
