import { CoreModule } from '@abp/ng.core';
import { NgModule } from "@angular/core";
import { NodataOrLoadingComponent } from "./components/nodata-or-loading/nodata-or-loading.component";
import { SwAttachmentsModule } from "./sw-attachments/sw-attachments.module";
import { ThemeSharedModule } from "@abp/ng.theme.shared";
import { TimeToDatePipe } from "./pipe/time-to-date.ipe";
import { NgScrollbarModule } from "ngx-scrollbar";
import { EmployeeDetailsViewComponent } from "./components/employee-details-view/employee-details-view.component";
import { EmptyComponent } from "./components/empty/empty.component";
import { NgbDropdownModule, NgbTooltip, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgModelChangeDebouncedDirective } from './directives/model-change-debounced.directive';
import { AsStringPipe } from './pipe/as-string.pipe';
import { PagerComponent } from './components/pager/pager.component';
import { IsNotNullOrEmptyStringPipe } from './pipe/is-null-or-empty.pipe';

@NgModule({
  declarations: [
    // SidebarComponent,
    // SelectedFiltersBannerComponent,
    NgModelChangeDebouncedDirective,
    // BreadcrumbComponent,
    // AnnouncementDetailsComponent,
    // BreadcrumbItemsComponent,
    PagerComponent,
    // ViewAttachmentComponent,
    // PageHeaderComponent,
    TimeToDatePipe,
    // QrCodeGeneratorComponent,
    // NodataOrLoadingComponent,
    // NgSelectAutoCompleteComponent,
    // SWConfirmationComponent,
    NodataOrLoadingComponent,
    EmployeeDetailsViewComponent,
    // CircularProgressBarComponent,
    // RequestStatusBadgeComponent,
    // CircularProgressBarSvgComponent,
    EmptyComponent,
    AsStringPipe,
    IsNotNullOrEmptyStringPipe,
    // HtmlContentPipe,
    // CircularProgressBarSvgComponent,
    // MediaPreviewComponent,
    // SwFilterComponent,
    // CalendarComponent,
    // SwDateTimePickerComponent,
    // FirstCharPipe,
  ],

  imports: [
    CoreModule,
    // ThemeSharedModule,
    // ThemeLeptonXModule,
    // CommercialUiModule,
    // NgbDropdownModule,
    // NgxValidateCoreModule,
    // NgbDatepickerModule,
    // GalleriaModule,
    // NgbCarouselModule,
    NgbTooltipModule,
    // ReactiveFormsModule,
    // NgbRatingModule,
    NgScrollbarModule,
    // NgbTimepickerModule,
    // NgSelectModule,
    NgbTooltip,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory,
    // }),
    // PageModule,
    // CommonModule,SwAttachmentsModule
    SwAttachmentsModule
  ],
  exports: [
    // CoreModule,
    ThemeSharedModule,
    // ThemeLeptonXModule,
    // CommercialUiModule,
    NgbDropdownModule,
    // NgxValidateCoreModule,
    // NgbDatepickerModule,
    NgScrollbarModule,
    // NgbCarouselModule,
    NgbTooltipModule,
    NgbTooltip,
    // NgSelectModule,
    // NgbTypeaheadModule,
    // SidebarComponent,
    // SelectedFiltersBannerComponent,
    // BreadcrumbComponent,
    // AnnouncementDetailsComponent,
    // BreadcrumbItemsComponent,
    // NgbTimepickerModule,
    PagerComponent,
    // PageHeaderComponent,
    NgModelChangeDebouncedDirective,
    TimeToDatePipe,
    // QrCodeGeneratorComponent,
    NodataOrLoadingComponent,
    // SWConfirmationComponent,
    // NgSelectAutoCompleteComponent,
    // NodataOrLoadingComponent,
    EmployeeDetailsViewComponent,
    // ViewAttachmentComponent,
    // CircularProgressBarComponent,
    // NgSelectAutoCompleteComponent,
    // RequestStatusBadgeComponent,
    // CircularProgressBarSvgComponent,
    EmptyComponent,
    AsStringPipe,
    IsNotNullOrEmptyStringPipe,
    // HtmlContentPipe,
    // MediaPreviewComponent,
    // SwFilterComponent,
    // CalendarComponent,
    // PageModule,
    // CommonModule,
    // SwAttachmentsModule,
    // SwDateTimePickerComponent,
    // FirstCharPipe
    SwAttachmentsModule
  ],

  providers: [
    // {
    //   provide: VALIDATION_BLUEPRINTS,
    //   useValue: {
    //     ...VALIDATION_BLUEPRINTS,
    //     required: '::RequiredValueMessage',
    //     invalidCharacter: '::InvalidCharacterMessage',
    //     invalidUrlPattern: '::InvalidUrlPatternMessage',
    //     minlength: '::MinimumLengthMessage',
    //     maxlength: '::MaximumLengthMessage',
    //     min: '::MinimumValueMessage',
    //     max: '::MaximumValueMessage',
    //     validateDateAfter: '::ValidateDateAfterMessage',
    //     validateDateTimeAfter: '::validateDateTimeAfter',
    //     validateER009: '::validateER009',
    //     validateER008: '::validateER008',
    //     AnnouncementsER008: 'CMSService::AnnouncementsER008',
    //     uploadingInProgress: '::UploadingInProgressMessage',
    //     validateDateInFuture: '::Date:DateInFuture',
    //     DateInpast: '::Date:DateInpast',
    //     invalidMobile: '::InvalidMobileMessage',
    //     email: '::EmailMessage',
    //   },
    // },
    // {
    //   provide: SW_CONFIRMATION_ICONS,
    //   useValue: {
    //     ...SW_DEFAULT_CONFIRMATION_ICONS,
    //     //  ...( confirmationIcons || {}),
    //   },
    // },
  ],
})
export class SharedLiteModule {}
