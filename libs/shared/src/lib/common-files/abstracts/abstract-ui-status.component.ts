import { LocalizationService } from '@abp/ng.core';
import { Component, Injector, OnDestroy, OnInit, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SelectedFiltersBannerService } from '../../components/slelected-filters-banner/selected-filters-banner.service';
import { FilterFormControl } from '../forms/filter-form-control';
import { UiStatus, AppStatusService } from '../../service/app-status.service';
@Component({template: ''})
export abstract class AbstractUiStatusComponent implements OnInit, OnDestroy {
    private _pageUi: string;
    protected uiStatus: UiStatus;
    private _sub$: Subscription[] = [];
    protected selectedFiltersBannerService = inject(SelectedFiltersBannerService);
    protected localizationService = inject(LocalizationService);
    protected appStatusService = inject(AppStatusService);
    protected injector = inject(Injector);
    constructor(){
        this._pageUi = (this.injector as any)._tNode.value;
    }

    ngOnInit(): void {
        this.uiStatus = this.appStatusService.loadStatus(this._pageUi);
        let sub1$ = this.selectedFiltersBannerService.filtersCleared$.subscribe(() => {
            this.onfilterClear()
        });
        let sub2$ = this.selectedFiltersBannerService.filterRemoved$.subscribe(filterName => {
            this.onfilterRemoved(filterName);
        });
        this._sub$ = [sub1$, sub2$];
    }
    ngOnDestroy(): void {
        this._sub$?.forEach(item => item.unsubscribe());
        this.saveExtraInfoStatus()
        this.appStatusService.saveStatus(this.uiStatus);
    }
    

    /** Need Implmenation */
    saveExtraInfoStatus(){}
    protected abstract onfilterClear();
    protected abstract onfilterRemoved(filterName: string);
    /** */

    
    /** HTML & TS Usage */    
    protected addSubsciption(sub$: Subscription){
        this._sub$.push(sub$);
    }
    protected setPageUI(pageUi: string){
        this._pageUi = pageUi;
    }
    /** */


    /** Saving Status */
    protected saveUiStatusValue(uiStatusKey: string, value: any){
        this.uiStatus.members[uiStatusKey] = value;
    }
    protected getUiStatusValue(uiStatusKey: string): any{
        return this.uiStatus.members[uiStatusKey];
    }
    protected saveUiStatusFormFilterValue(uiStatusKey: string, fb: FormGroup){
        let filterValue = {};
        Object.keys(fb.controls)
        .map(key => ({key: key, control:fb.controls[key] as FilterFormControl}))
        .filter(filterControl => filterControl.control?.filterValue).forEach(filterControl => {
            filterValue[filterControl.key] = filterControl.control.filterValue;
        })
        this.uiStatus.members[uiStatusKey] = filterValue;
    }
    protected loadUiStatusFormFilterValue(uiStatusKey: string, fb: FormGroup){
        const filterValues = this.uiStatus.members[uiStatusKey];
        Object.keys(filterValues ?? {}).forEach(key => {
            (fb.controls[key] as FilterFormControl).filterValue = filterValues[key];
        })
    }
    /** */
}
