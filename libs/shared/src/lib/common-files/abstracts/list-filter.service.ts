import { Inject, Injectable, inject } from '@angular/core';
import { SelectedFiltersBannerService } from '../../components/slelected-filters-banner/selected-filters-banner.service';
import { ABP, ListService, PagedResultDto } from '@abp/ng.core';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class ListFilterService<T, K> {
    public isLoading = false;
    public isFiltering = false;
    protected _filters = {} as T;
    private selectedFiltersBannerService = inject(SelectedFiltersBannerService);
    public readonly list: ListService = inject(ListService);
    public data: PagedResultDto<K> = { totalCount: 0, items: []};
    constructor(
        @Inject('getListObs$') public getListObs$: (param: T) => Observable<PagedResultDto<K>> | undefined = undefined){
        this._initListService();
    }
    public getFilters(): T{
        return this._filters;
    }
    public setFilterText(filterText){
        (this._filters as any).filterText = filterText;
    }
    public updateFilters(newFilters: T) {
        this._filters = { ...newFilters, filterText: (this._filters as any).filterText };
    }

    public updateFilterText(newFilterText: string) {
        this.setFilterText(newFilterText);
    }
    public getData(withResetPage = true){
        this.selectedFiltersBannerService.updateSelectedFilters();
        this.isLoading = true;
        this.isFiltering = this.selectedFiltersBannerService.selectedFilters.length > 0;
        if(withResetPage){
             this.list.get();
            }
         else{
             this.list.getWithoutPageReset();
            }
    }
    private _initListService(){
        if(!this.getListObs$){
            return;
        }
        const getData = (query: ABP.PageQueryParams) => {
            this.data.items = [];
            return this._getList(query);
        };
        const setData = (list) =>{
            this.data = list;
        };
        this.list.hookToQuery(getData).subscribe(setData);
    }
    private _getList(query) {
        this.isLoading = true;
        return this.getListObs$({...query,...this._filters})
        .pipe(finalize(() => (this.isLoading = false)));
    }
}
