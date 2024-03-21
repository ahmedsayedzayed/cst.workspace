import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CalendarDateFormatter, CalendarEvent, CalendarModule, CalendarMomentDateFormatter, CalendarView, DateAdapter, CalendarUtils, CalendarA11y, CalendarEventTitleFormatter } from 'angular-calendar';
import { CalendarService } from '../../proxy/cmsservice/controllers/cms/calenders';
import { CalendarDto, CalendarMonthlyDTO } from '../../proxy/cmsservice/cms/calenders/dto/public';
import { CalendarLocation, CalendarTypes } from '../../proxy/cmsservice/enum';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule, LocalizationService } from '@abp/ng.core';
import { DatePipe, formatDate } from '@angular/common';
import { AppConsts } from '../../common-files/consts/app.consts';
import { Subscription, filter, finalize } from 'rxjs';
import { ThemeSharedModule, ToasterService } from '@abp/ng.theme.shared';
import { AttachmentDownloadService } from '../../sw-attachments/shared/service/attachment-download.service';
import { NavigationEnd, NavigationSkipped, Router } from '@angular/router';
import { ThemeLeptonXModule } from '@volosoft/abp.ng.theme.lepton-x';
import { CommercialUiModule } from '@volo/abp.commercial.ng.ui';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedLiteModule } from '../../shared-lite.module';

// REFECTORY_CODE:U2: Use Public / Private Accessible (Public when used in html, private when used only typescript) For All Variable & Methods
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeLeptonXModule,
    CommercialUiModule,
    CalendarModule,
    SharedLiteModule
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    { provide: DateAdapter, useFactory: adapterFactory},
    CalendarEventTitleFormatter,
    CalendarDateFormatter,
    CalendarUtils,
    CalendarA11y,
  ]
})
export class CalendarComponent implements OnInit, OnDestroy {
  public view: CalendarView = CalendarView.Month;
  public CalendarView = CalendarView;
  private activeDayIsOpen: boolean = true;
  public viewDate: Date = new Date();

  public events: CalendarEvent[] = [];
  public isAgendaActive:boolean = false;
  public calendarData: CalendarMonthlyDTO[] = [];
  public eventDetails: CalendarDto;
  public isModalOpen:boolean = false;
  public isModalBusy:boolean = false;
  public modalOptions: NgbModalOptions = {
    size: 'lg',
    centered: true,
  };
  public isCurrentLanguageAr: boolean;
  public agendaList: CalendarMonthlyDTO[] = [];
  @Input() showEventsMonth: boolean = false;
  public eventsMonth: CalendarMonthlyDTO[] = [];
  public isLoading: boolean = false;
  public AppConsts = AppConsts;
  public routerSub$:Subscription;
  public datesRangeList: any[] = [];
  public viewAgendaStartDate: string;
  public viewAgendaEndDate: string;
  inSideLocation= CalendarLocation.InSide;
  outSideLocation= CalendarLocation.OutSide;
  // REFECTORY_CODE:U2: all private variable and constructor prefer begin with under-scroll like '_localizationService instead localizationService'
  // REFECTORY_CODE:U2: when used under-scroll the name be name as camelCase like '_calendarService instead _CalendarService'
  constructor(
    private _calendarService: CalendarService,
    private _localizationService: LocalizationService,
    private _datePipe: DatePipe,
    private _router:Router,
    private _toasterService: ToasterService
  ){
    this.routerSub$ = _router.events.pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationSkipped)).subscribe(event => {
      const id = this._router.getCurrentNavigation().extras?.state?.id;
      if(id){
        this.openModal(id);
      }
    });
  }
  // REFECTORY_CODE:U2: When use ngOnInit must have implement on class
  ngOnInit() {
    this.isCurrentLanguageAr = this._localizationService.currentLang.includes('ar');
    this.setView(this.view);
    this.onlyEventsMonth();
  }

  ngOnDestroy(): void {
      this.routerSub$?.unsubscribe();
  }

  public setView(view: CalendarView) {
    this.view = view;
    this.isAgendaActive = false;
    this.getListForMonthStart()

  }
  public openAgenda(){
    this.isAgendaActive = true;
    this.view = null;
    this.agendaEvents()

  }
  public closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
    this.getListForMonthStart()
  }

  public openModal(id: number){
    this.isModalOpen = true;
    this._calendarService.get(id).subscribe(res => {
      this.eventDetails = res;
    })
  }

  private getListForMonthStart(){
    let month = this.viewDate.getMonth()+ 1;
    let year = this.viewDate.getFullYear();
    this.datesRangeList = [];
    this._calendarService.getListForMonthStart(year,month).subscribe(data => {
      this.events = []
      this.calendarData = data

    for(let i=0 ; i<this.calendarData.length; i++){
      let startDate = new Date(this.calendarData[i].start);
      let endDate = new Date(this.calendarData[i].end);
      const currentDate = new Date(startDate);
         // get seprate days from range dates of events
      while (currentDate <= endDate) {
        this.datesRangeList.push({
          id: this.calendarData[i].id,
          type: this.calendarData[i].type,
          title: this.calendarData[i].title,
          start:  new Date(currentDate)
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }

      this.events.push(
        {
          title: this.calendarData[i].title,
          start:  new Date(this.calendarData[i].start),
          end: new Date(this.calendarData[i].end)
        },
      )
    }

    })
  }
  private onlyEventsMonth(){
    let currentDate = new Date();
    let month = currentDate.getMonth()+ 1;
    let year = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const formattedfirstDayOfMonth = this._datePipe.transform(firstDayOfMonth, 'yyyy-MM-ddTHH:mm:ss.SSSZ');

    const firstDayOfNextMonth = new Date(year, month, 1);
    const lastDayOfCurrentMonth = new Date(firstDayOfNextMonth.getTime() - 1);
    const formattedLastDayOfCurrentMonth = this._datePipe.transform(lastDayOfCurrentMonth, 'yyyy-MM-ddTHH:mm:ss.SSSZ');

    this._calendarService.getList(formattedfirstDayOfMonth,formattedLastDayOfCurrentMonth).subscribe(data => {
      this.eventsMonth = data
    })
  }
  private agendaEvents() {
    this.isLoading = true
    let currentDate = new Date().toLocalISOString();
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let futureDate = new Date(year + 1, month, day).toLocalISOString();

    const datePipe = this.isCurrentLanguageAr? new DatePipe('ar') : new DatePipe('en');
    this.viewAgendaStartDate = datePipe.transform(new Date(currentDate),'dd MMMM yyyy');
    this.viewAgendaEndDate = datePipe.transform(new Date(futureDate),'dd MMMM yyyy');

    this._calendarService.getList(currentDate,futureDate).subscribe(data => {
      this.agendaList = data
      this.isLoading = false
    })
  }
  public eventMonth(eventStart:Date, dayDate:Date){
     const formattedDate1 = (new Date(eventStart)).getDate();
     const formattedDate2 = dayDate.getDate();
     const formattedMonth1 = (new Date(eventStart)).getMonth();
     const formattedMonth2 = dayDate.getMonth();
     if(formattedDate1 == formattedDate2 && formattedMonth1 == formattedMonth2){
      return true
     }
  }
  public eventMonthType(type){
    if(type == CalendarTypes.Workshop){
      return 'Workshop'
    }else if(type == CalendarTypes.Forum){
      return 'Forum'
    }else if(type == CalendarTypes.Course){
      return 'Course'
    }else if(type == CalendarTypes.Vacation){
      return 'Vacation'
    }else if(type == CalendarTypes.Other){
      return 'Other'
    }
  }
  public eventType(type: number){
    if(type == CalendarTypes.Workshop){
      return 'var(--status-info-600, #0284C7)'
    }else if(type == CalendarTypes.Forum){
      return 'var(--secondary-dark-purple-100, #5E1AD5)'
    }else if(type == CalendarTypes.Course){
      return 'var(--status-warning-600, #D97706)'
    }else if(type == CalendarTypes.Vacation){
      return 'var(--status-success-600, #0D9488)'
    }else if(type == CalendarTypes.Other){
      return 'var(--neutral-600, #475569)'
    }
  }

  hoverEventMonth(type: number, index: number){
    const hoverElement = document.getElementsByClassName('hoverEvent')[index] as HTMLElement;
        if(type == CalendarTypes.Workshop){
          return hoverElement.style.backgroundColor= 'var(--status-info-100, #E0F2FE)';
        }else if(type == CalendarTypes.Forum){
          return hoverElement.style.backgroundColor= 'var(--secondary-dark-purple-6, rgba(94, 26, 213, 0.06))';
        }else if(type == CalendarTypes.Course){
          return hoverElement.style.backgroundColor= 'var(--status-warning-50, #FEF3C7)';
        }else if(type == CalendarTypes.Vacation){
          return hoverElement.style.backgroundColor= 'var(--status-success-50, #F0FDFA)';
        }else if(type == CalendarTypes.Other){
          return hoverElement.style.backgroundColor= 'var(--neutral-200, #E2E8F0)';
        }
  }
  onMouseLeave(index: number){
    const hoverElement = document.getElementsByClassName('hoverEvent')[index] as HTMLElement;
    return hoverElement.style.backgroundColor = '#fff';
  }

  subscribeEvent(){
    this.isModalBusy = true;
    this._calendarService.getICS(this.eventDetails.id)
    .pipe(finalize(() => {this.isModalBusy = false;}))
    .subscribe((res :any) => {
      AttachmentDownloadService.saveFile(res.data, res.filename);
      this._toasterService.success('::Success');
      this.isModalOpen = false;
    })
  }

}
