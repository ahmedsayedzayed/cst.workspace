import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sw-filter',
  templateUrl: './sw-filter.component.html',
  styleUrls: ['./sw-filter.component.scss']
})
export class SwFilterComponent {
    @Input() filterText: string;
    @Input() isShowFilters: boolean;
    @Input() isAdvancedSearch: boolean = true;
    @Input() isQuickSearch: boolean = true;
    @Input() searchInputText = '::SearchWithName';
    @Input() advancedSearchText = '::AdvancedFilter';
    @Output() filterTextChange = new EventEmitter<string>();
    @Output() showAdvancedFilter = new EventEmitter<boolean>();

    onChangeValue(value: string){
      this.filterText = value;
      this.filterTextChange.emit()
    }
}
