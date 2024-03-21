import { QuickFilter } from '../../common-files/forms/quick-filter';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterFormControl } from '../../common-files/forms/filter-form-control';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class SelectedFiltersBannerService {
    selectedFilters = [];
    filtersForm: FormGroup;
    quickFilter: QuickFilter;

    private filterRemoved = new Subject<string>();
    private filtersCleared = new Subject<void>();
    private filters = new BehaviorSubject<QuickFilter[]>([]);

    filterRemoved$ = this.filterRemoved.asObservable();
    filtersCleared$ = this.filtersCleared.asObservable();
    filters$ = this.filters.asObservable();

    init(filtersForm: FormGroup | undefined, quickFilter: QuickFilter) {
        this.filtersForm = filtersForm;
        this.quickFilter = quickFilter;
    }

    updateSelectedFilters() {
        this.selectedFilters = [];

        if (this.quickFilter.filterValue){
            this.selectedFilters.push({
                filterName: this.quickFilter.filterName,
                filterValue: this.quickFilter.filterValue,
                filterTitle: this.quickFilter.filterTitle});
        }
        if(this.filtersForm){
            Object.keys(this.filtersForm.controls).forEach(key => {
                const control = this.filtersForm.get(key) as FilterFormControl;
                if (control.value !== null && control.value !== undefined && control.value !== '') {
                    let filterValue = '';

                    if (control.filterValueFun === undefined) {
                        filterValue = control.value;
                    } else if (control.filterValueFun === null) {
                        filterValue = control.filterValue;
                    } else {
                        filterValue = control.filterValueFun(control.value);
                    }
                    if (control.filterTitle && filterValue) {
                        this.selectedFilters.push({
                            filterName: key,
                            filterValue: filterValue,
                            filterTitle: control.filterTitle,
                            splitBy: control.splitBy});
                    }
                }
            });
        }
        this.filters.next(this.selectedFilters);
    }

    removeFilter(filterName) {
        this.filterRemoved.next(filterName);
    }

    clearFilters() {
        this.filtersCleared.next();
    }
}
