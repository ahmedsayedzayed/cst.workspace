import { HttpErrorResponse } from "@angular/common/http";
import { Injector } from "@angular/core";
import { DEFAULT_ERROR_LOCALIZATIONS, DEFAULT_ERROR_MESSAGES, ToasterService } from "@abp/ng.theme.shared";
import { SWConfirmationService } from "../components/confirmation/service/confirmation.service";
import { AuthService, ContentProjectionService, LocalizationService, PROJECTION_STRATEGY } from "@abp/ng.core";
// import { NotFound404Component } from "../../components/not-found404/not-found404.component";
import { Router } from "@angular/router";

export function handleHttpErrors(injector: Injector, httpError: HttpErrorResponse) {
    // return throwError(httpError);
    // if (httpError.status === 400) {
    //   const toaster = injector.get(ToasterService);
    //   toaster.error(httpError.error?.error?.message || 'Bad request!', '400');
    //   return;
    // }
    if (httpError.status === 401) {
        const _authService: AuthService = injector.get(AuthService);
        _authService.navigateToLogin();
        return;
    }
    if (httpError.status === 404) {
      const router = injector.get(Router);
      const localizationService = injector.get(LocalizationService);
      router.navigate(['notFound'], {replaceUrl:true, queryParams: {returnUrl: router.url, lang: localizationService.currentLang}});
      // const contentProjection = injector.get(ContentProjectionService);
      // contentProjection.projectContent(PROJECTION_STRATEGY.AppendComponentToBody(NotFound404Component));
      return;
    }

    const _confirmation: SWConfirmationService = injector.get(SWConfirmationService);
    const title = {
      key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.title,
      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
    };
    const message = {
      key: DEFAULT_ERROR_LOCALIZATIONS.defaultError.details,
      defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.details,
    };
    return _confirmation.error(httpError.error?.error?.message ?? message, title, httpError.error?.error?.details, {
      cancelText: '::Close',
    });

    // return throwError(httpError);

  }