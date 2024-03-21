import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sw-date-time-picker',
  templateUrl: './sw-date-time-picker.component.html',
  styleUrls: ['./sw-date-time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwDateTimePickerComponent),
      multi: true,
    },
  ]
})
export class SwDateTimePickerComponent implements ControlValueAccessor {
  @Input() defaultHours:NgbTimeStruct ; 
  
  public readonly:boolean;
  private _date : Date | undefined;
  public get date() : Date  | undefined { return this._date; }
  public set date(value: Date | string | undefined) { 
    this._date = value instanceof Date ? value : new Date(value);
    this.valueChangd();
  }
  private _time : NgbTimeStruct = { hour: 0,  minute: 0  , second:0}; 
  public get time() : NgbTimeStruct {
    return this._time;
  }
  public set time(v : NgbTimeStruct) {
    this._time = v;
    this.valueChangd();
  }

  onChange: any = () => {};
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  writeValue(value: string | Date | undefined): void {
    if(!value) {
      this.time = this.defaultHours
    }else {
      const date = value instanceof Date ? value : new Date(value);
      this.time.hour = date?.getHours() ?? 0;
      this.time.minute = date?.getMinutes() ?? 0;
      this.date = date;
    }
    if(value instanceof String || typeof(value) === 'string'){
      this.valueChangd();
    }
  }
  setDisabledState?(isDisabled: boolean): void {
    this.readonly = isDisabled;
  }

  valueChangd(){
    if(this.date && this.time){
      this.date.setHours(this.time.hour);
      this.date.setMinutes(this.time.minute);
      this.onChange(new Date(this.date.getTime()));
    }else{
      this.onChange(undefined);
    }
  }
  resetDatepicker(datepicker) {
    event.stopPropagation();
    datepicker.navigateTo({ year: 0, month: 0, day: 0 });
    this.date = new Date();
    this._date = undefined;
    this.onChange(undefined);
  }
}
