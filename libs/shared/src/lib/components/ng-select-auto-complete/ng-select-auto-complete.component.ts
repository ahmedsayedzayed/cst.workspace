import { PagedResultDto, isArray, isNullOrEmpty } from '@abp/ng.core';
import { Component, Output, forwardRef, EventEmitter, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subject, debounceTime, distinctUntilChanged, finalize, of, skip, switchMap, tap, filter, catchError } from 'rxjs';

@Component({
  selector: 'app-ng-select-auto-complete',
  templateUrl: './ng-select-auto-complete.component.html',
  styleUrls: ['./ng-select-auto-complete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgSelectAutoCompleteComponent),
      multi: true
    }
  ]
})
export class NgSelectAutoCompleteComponent<T,K, F> implements ControlValueAccessor, OnInit {
  @Output() valueChanged: EventEmitter<K> = new  EventEmitter<K>();
  @Input() queryInput: F = {maxResultCount: 50, filterText: undefined} as F;
  @Input() searchFn: (q: F) => Observable<PagedResultDto<K> | K[]>;
  @Input() bindLabel: string = "displayName";
  @Input() bindValue: string = "id";
  @Input() appendTo: string;
  @Input() dropdownPosition: 'bottom' | 'top' | 'auto';
  data$: Observable<K[]>;
  _queryChanged: Subject<string> = new Subject<string>();
  set queryChanged(q: any) {  this._queryChanged.next(q.term); }

  isValueChanged = false;
  
  private _value : T;
  public get value() : T {
    return this._value;
  }
  public set value(v : T) {
    this._value = v;
    this.onChange(v);
  }
  
  disabled = false;
  onChange: any = (value: any) => {};
  onTouched: any = () => {};
  isLoading: boolean;
  constructor(private _cd: ChangeDetectorRef){}
  ngOnInit(): void {
    this._search();
    this._queryChanged.pipe(
      skip(1), distinctUntilChanged(), debounceTime(500))
    .subscribe(text => { 
      this._search(text);
      this._cd.detectChanges();
    }); 
  }
  private _search(searchText?: string){
    let filter = {...this.queryInput} as any;
    filter.filter = isNullOrEmpty(searchText) && this.isValueChanged ? this._value : searchText ;
    this.isValueChanged = false;
    this.isLoading = true;
    this.data$ = this.searchFn(filter)
    .pipe(
      switchMap(res => of(isArray(res) ? res as K[] : (res as PagedResultDto<K>).items)),
      catchError((error) => { 
        this.data$ = undefined; 
        return of(error)
      }),
      finalize(() => {this.isLoading = false;})); 
  }
  search(){
    if(!this.data$){
      this._search();
    }
  }
  clear(){
    this.value = undefined;
    this._search();
  }
  writeValue(obj: any): void {
    this.data$ = undefined;
    this.isLoading = false;
    this.isValueChanged = true;
    if(this.value != obj){
      this.value = obj;
      this._search();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
