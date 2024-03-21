import { Directive, OnDestroy, Output, EventEmitter, Input } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Subscription, skip, distinctUntilChanged, debounceTime } from "rxjs";
import { CustomValidators } from "../common-files/forms/custom.validators";

@Directive({
  selector: '[ngModelChangeDebounced]',
})
export class NgModelChangeDebouncedDirective implements OnDestroy {
  @Output()
  ngModelChangeDebounced = new EventEmitter<any>();
  @Input()
  ngModelChangeDebounceTime = 500; // optional, 500 default
  @Input()
  rejectSpecialCharacters = false; // optional, false default
  @Input()
  rejectEmptySpaces = false; // optional, false default

  subscription: Subscription;
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private ngModel: NgModel) {
    this.subscription = this.ngModel.control.valueChanges.pipe(
      skip(1), // skip initial value
      distinctUntilChanged(),
      debounceTime(this.ngModelChangeDebounceTime)
    ).subscribe((value) => {
      if (!this.rejectSpecialCharacters || CustomValidators.specialCharactersInText(value).length === 0) {
        if (!this.rejectEmptySpaces || value === '' || value.trim() !== '')
          this.ngModelChangeDebounced.emit(value)
      }
    });
  }
}