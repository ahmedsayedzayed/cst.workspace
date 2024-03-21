import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnDestroy, OnInit, inject, Inject } from "@angular/core";
import { FilterFormControl } from '../forms/filter-form-control';
import { AbstractQuickSearchFilterComponent } from './abstract-quick-search-filter.component';
import { isArray } from '@abp/ng.core';


@Component({template: ''})
export abstract class AbstractAdvancedFilterComponent extends AbstractQuickSearchFilterComponent implements OnInit, OnDestroy {
    public filtersForm: FormGroup;
    private _isShowFilters = false;
    public get isShowFilters() { return this._isShowFilters}
    public filtersFormValue: any;
    protected fb = inject(FormBuilder);
    constructor(@Inject(Boolean) readonly isAutoServiceInject = false){
        super(isAutoServiceInject);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.initForm();
        if(this.isAutoServiceInject){
            this.loadUiStatusFormFilterValue('filtersForm', this.filtersForm);
            this.selectedFiltersBannerService.init(this.filtersForm, this.quickFilter);
            this.loadUiStatusFilterForm();
        }
    }
    protected onfilterClear(): void {
        this.resetForm();
        super.onfilterClear();
    }
    protected onfilterRemoved(filterName: string): void {
        if (filterName === this.quickFilter.filterName) {
            this.quickFilter.filterValue = null;
        } else {
            this.remvoeFilerFormControl(filterName);
        }
        this.refreshFilters();
    }
    saveExtraInfoStatus(): void {
        super.saveExtraInfoStatus();
        this.uiStatus.members['filters'] = this.filtersForm.getRawValue();
        this.saveUiStatusFormFilterValue('filtersForm', this.filtersForm);
    }

    /** Need Implmenation */
    abstract initForm(): void ;
    /** */

    
    /** HTML & TS Usage */    
    public changeFilterValueForDropDown(event, field, fb: FormGroup = undefined) {
        const control = ((fb ?? this.filtersForm).get(field) as FilterFormControl)
        if(isArray(event)){
            control.filterValue = event.map(e => e?.displayName).join(' , ');
        } else {
            control.filterValue = event?.displayName;
        }
    }
    public showFilterSidebar(){
        this._isShowFilters = true;
    }
    public closeFilterSidebar(){
        if(this.filtersFormValue){
            this.filtersForm.patchValue(this.filtersFormValue);
        };
        this._isShowFilters = false;
    }
    public submitFilterForm() {
        if (this.filtersForm.invalid) {
            return;
        }
        this.refreshFilters(true,true);
        this.closeFilterSidebar();
    }
    /** */

    /** General Behavior */
    protected loadUiStatusFilterForm(){
        const filter = this.uiStatus.members['filters'];
        if(filter){ this.filtersForm.patchValue(filter); }
    }
    protected refreshFilters(withResetPage = true, isUserFilterAction = true){
        this.filtersFormValue = this.filtersForm.getRawValue();
        let formValue = this.optimizeFormData();
        this.service.updateFilters(formValue);
        this.service.getData(withResetPage);
    }
    protected optimizeFormData(){
        return this.filtersForm.value;
    }
    protected resetForm(): void{
        this.filtersForm.reset();
    }
    protected remvoeFilerFormControl(filterName: string): void{
        this.filtersForm.get(filterName).setValue(null);
    }
    protected resetDatepicker(datepicker, inputControls: string) {
        event.stopPropagation();
        datepicker.navigateTo({ year: 0, month: 0, day: 0 });
        this.filtersForm.controls[inputControls].setValue(null);
      }
}
