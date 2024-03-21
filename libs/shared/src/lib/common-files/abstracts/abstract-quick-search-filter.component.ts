import { ListService } from "@abp/ng.core";
import { Component, OnInit, OnDestroy, inject, Inject } from "@angular/core";
import { CustomValidators } from "../forms/custom.validators";
import { QuickFilter } from "../forms/quick-filter";
import { ListFilterService } from "./list-filter.service";
import { AbstractUiStatusComponent } from "./abstract-ui-status.component";

@Component({template: ''})
export abstract class AbstractQuickSearchFilterComponent extends AbstractUiStatusComponent implements OnInit, OnDestroy {
    public quickFilter = { filterName: '', filterTitle: '', filterValue: ''} as QuickFilter;
    protected isIgnoreQuickSearch: boolean = false;
    public list = inject(ListService);
    protected service: ListFilterService<any, any>;
    constructor(@Inject(Boolean) readonly isAutoServiceInject = false) {
        super();
        if(isAutoServiceInject){
            this.service = inject(ListFilterService);
        }
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.quickFilter.filterTitle = this.localizationService.instant('::QuickFilter');
        const quickFilterValue = this.uiStatus.members['quickFilterValue'];
        this.quickFilter.filterValue = quickFilterValue;
        this.selectedFiltersBannerService.init(undefined, this.quickFilter);
        this.loadUiStatusForQuickFilter(quickFilterValue);
        const pageNumber = this.getUiStatusValue('pageNumber') 
        const maxResultCount = this.getUiStatusValue('maxResultCount') 
        setTimeout(() => {
            this.list.maxResultCount = maxResultCount ?? this.list.maxResultCount;
            this.list.page = pageNumber ?? 0;
            this.refreshFilters(false);
        }, 10);
    }
    protected onfilterClear(){
        this.isIgnoreQuickSearch = true;
        this.quickFilter.filterValue = null;
        this.quickFilterChangedWithoutRefresh();
        this.refreshFilters();
    }
    protected onfilterRemoved(filterName: string): void {
        if (filterName === this.quickFilter.filterName) {
            this.quickFilter.filterValue = null;
        }
    }
    saveExtraInfoStatus(): void {
        super.saveExtraInfoStatus();
        this.uiStatus.members['quickFilterValue'] = this.quickFilter.filterValue;
        this.saveUiStatusValue('pageNumber', this.list.page);
        this.saveUiStatusValue('maxResultCount', this.list.maxResultCount);
    }

    
    /** HTML & TS Usage */    
    public chnageFilterText(value: string) {
        this.quickFilter.filterValue = value;
        this.filterTextChange();
    }
    public filterTextChange() {
        if(this.isIgnoreQuickSearch){
            this.isIgnoreQuickSearch = false;
            return;
        }
        if (CustomValidators.specialCharactersInText(this.quickFilter.filterValue).length === 0) {
            this.quickFilterSearch();
        }
    }

    /** General Behavior */
    protected loadUiStatusForQuickFilter(quickFilterValue: string) {
        this.service.setFilterText(quickFilterValue);
    }
    protected quickFilterChangedWithoutRefresh(): void {
        this.service.setFilterText(this.quickFilter.filterValue);
    }
    protected quickFilterSearch(){
        this.service.updateFilterText(this.quickFilter.filterValue);
        this.refreshFilters();
    }
    protected refreshFilters(withResetPage: boolean = true){
        this.service.getData(withResetPage);
    }
}