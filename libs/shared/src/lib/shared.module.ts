import { ReactiveFormsModule } from '@angular/forms';
// import { CoreModule } from '@abp/ng.core';
import {
  NgbCarouselModule,
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbRatingModule,
  NgbTimepickerModule,
  // NgbTooltip,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeLeptonXModule } from '@volosoft/abp.ng.theme.lepton-x';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule, VALIDATION_BLUEPRINTS } from '@ngx-validate/core';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SelectedFiltersBannerComponent } from './components/slelected-filters-banner/selected-filters-banner.component';
// import { NgModelChangeDebouncedDirective } from './directives/model-change-debounced.directive';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbItemsComponent } from './components/breadcrumb-items/breadcrumb-items.component';
// import { LeftSideCardComponent } from './components/left-side-card/left-side-card.component';
//import { MainCardComponent } from './components/main-card/main-card.component';
//import { CardComponent } from './components/card/card.component';
//import { ImagesGalleryComponent } from './components/images-gallery/images-gallery.component';
// import { AttachmentComponent } from './sw-attachments/attachment.component';
// import { FileUploadModule } from 'primeng/fileupload';
//import { MediaViewerComponent } from './components/MediaViewer/media-viewer.component';
import { GalleriaModule } from 'primeng/galleria';
//import { HeaderCardComponent } from './header-card/header-card.component';
// import { Base64FilePerviewComponent } from './sw-attachments/base64-file-preview/base64-file-preview.component';
// import { AttachmentPipe } from './sw-attachments/pipe/attachment.pipe';
// import { PagerComponent } from './components/pager/pager.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { QrCodeGeneratorComponent } from './components/qr-code-generator/qr-code-generator.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelectAutoCompleteComponent } from './components/ng-select-auto-complete/ng-select-auto-complete.component';
import { SWConfirmationComponent } from './components/confirmation/confirmation.component';
// import {
//   SW_CONFIRMATION_ICONS,
//   SW_DEFAULT_CONFIRMATION_ICONS,
// } from './components/confirmation/token/confirmation-icons.token';
// import { EmployeeDetailsViewComponent } from './components/employee-details-view/employee-details-view.component';
import { CircularProgressBarComponent } from './components/circular-progress-bar/circular-progress-bar.component';
import { RequestStatusBadgeComponent } from './components/request-status-badge/request-status-badge.component';
import { ViewAttachmentComponent } from './components/view-attachment/view-attachment.component';
import { CircularProgressBarSvgComponent } from './components/circular-progress-bar-svg/circular-progress-bar-svg.component';
// import { FileSizePipe } from './sw-attachments/pipe/file-size.pipe';
import { HtmlContentPipe } from './pipe/html-content.pipe';
// import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaPreviewComponent } from './components/media-preview/media-preview.component';
// import { EmptyComponent } from './components/empty/empty.component';
// import { AsStringPipe } from './pipe/as-string.pipe';
import { SwFilterComponent } from './components/sw-filter/sw-filter.component';
import { CalendarComponent } from './components/calendar/calendar.component';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PageModule } from '@abp/ng.components/page';
import { CommonModule } from '@angular/common';
import { SwAttachmentsModule } from './sw-attachments/sw-attachments.module';
import { AnnouncementDetailsComponent } from './components/announcement-details/announcement-details.component';
import { FirstCharPipe } from './pipe/first-char.pipe';
import { SwDateTimePickerComponent } from './components/sw-date-time-picker/sw-date-time-picker.component';
import { SharedLiteModule } from './shared-lite.module';
import { CoreModule } from '@abp/ng.core';

@NgModule({
  declarations: [
    // SidebarComponent,
    SelectedFiltersBannerComponent,
    // NgModelChangeDebouncedDirective,
    BreadcrumbComponent,
    AnnouncementDetailsComponent,
    BreadcrumbItemsComponent,
    // LeftSideCardComponent,
    //MainCardComponent,
    //CardComponent,
    //ImagesGalleryComponent,
    //AttachmentComponent,
    //FileSizePipe,
    //MediaViewerComponent,
    // Base64FilePerviewComponent,
    // MediaViewerComponent,
    //HeaderCardComponent,
    // PagerComponent,
    ViewAttachmentComponent,
    //AttachmentDetailsPipe,
    //AttachmentPipe,
    PageHeaderComponent,
    // TimeToDatePipe,
    QrCodeGeneratorComponent,
    NgSelectAutoCompleteComponent,
    SWConfirmationComponent,
    // EmployeeDetailsViewComponent,
    CircularProgressBarComponent,

    RequestStatusBadgeComponent,
    CircularProgressBarSvgComponent,
    // EmptyComponent,
    // AsStringPipe,
    HtmlContentPipe,
    CircularProgressBarSvgComponent,
    MediaPreviewComponent,
    SwFilterComponent,
    // CalendarComponent,
    SwDateTimePickerComponent,
    FirstCharPipe,
  ],

  imports: [
    SharedLiteModule,
    CoreModule,
    ThemeSharedModule,
    ThemeLeptonXModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    NgbDatepickerModule,
    GalleriaModule,
    // FileUploadModule,
    NgbCarouselModule,
    // NgbTooltipModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgScrollbarModule,
    NgbTimepickerModule,
    NgSelectModule,
    // NgbTooltip,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory,
    // }),
    PageModule,
    CommonModule,
    SwAttachmentsModule,
    CalendarComponent,
  ],

  exports: [
    SharedLiteModule,
    CoreModule,
    ThemeSharedModule,
    ThemeLeptonXModule,
    CommercialUiModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    NgbDatepickerModule,
    NgScrollbarModule,
    NgbCarouselModule,
    // NgbTooltipModule,
    NgSelectModule,
    NgbTypeaheadModule,
    // SidebarComponent,
    SelectedFiltersBannerComponent,
    BreadcrumbComponent,
    AnnouncementDetailsComponent,
    // LeftSideCardComponent,
    //CardComponent,
    BreadcrumbItemsComponent,
    NgbTimepickerModule,
    // LeftSideCardComponent,
    //MainCardComponent,
    //HeaderCardComponent,
   // AttachmentComponent,
    // Base64FilePerviewComponent,
    // PagerComponent,
    PageHeaderComponent,
    // NgModelChangeDebouncedDirective,
   // AttachmentPipe,
    //AttachmentDetailsPipe,
    // TimeToDatePipe,
    QrCodeGeneratorComponent,
    SWConfirmationComponent,
    NgSelectAutoCompleteComponent,
    // EmployeeDetailsViewComponent,
    ViewAttachmentComponent,
    CircularProgressBarComponent,

    NgSelectAutoCompleteComponent,
    RequestStatusBadgeComponent,
    CircularProgressBarSvgComponent,
    // EmptyComponent,
    // AsStringPipe,
    HtmlContentPipe,
    MediaPreviewComponent,
    SwFilterComponent,
    // CalendarComponent,
    PageModule,
    CommonModule,
    SwAttachmentsModule,
    SwDateTimePickerComponent,
    FirstCharPipe,
    CalendarComponent,
  ],

  providers: [
  ],
})
export class SharedModule {}
