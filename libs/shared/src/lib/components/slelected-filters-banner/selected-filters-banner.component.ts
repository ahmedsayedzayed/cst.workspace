import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SelectedFiltersBannerService } from './selected-filters-banner.service';

@Component({
  selector: 'app-selected-filters-banner',
  templateUrl: './selected-filters-banner.component.html',
  styleUrls: ['./selected-filters-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush})
export class SelectedFiltersBannerComponent implements OnInit {
  filters: any[] = [];
  constructor(
    public readonly selectedFiltersBannerService: SelectedFiltersBannerService,
    private _cd: ChangeDetectorRef) { }
  ngOnInit(): void {
      this.selectedFiltersBannerService.filters$.subscribe(filter => {
        this.filters = filter.map(e => {
          if(e.splitBy){
            const assignToList = e.filterValue?.split(e.splitBy) ?? [];
            return {
              ...e,
              filterValue: assignToList.length > 0 ? assignToList[0] : undefined,
              otherFilterValue: assignToList.length > 1 ? assignToList.slice(1) : undefined};
          }else{
            return e;
          }
        });
        this._cd.detectChanges();
      });
  }
}
