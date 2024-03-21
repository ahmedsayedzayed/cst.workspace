import { ToasterService } from "@abp/ng.theme.shared";
import { Component, ElementRef, inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CustomValidators } from "../forms/custom.validators";

@Component({template: ''})
export abstract class AbstractFormComponent<T> {
    protected fb = inject(FormBuilder);
    protected el = inject(ElementRef);
    protected toasterService = inject(ToasterService);
    protected form:FormGroup;
    protected selected: T;
    requiredValidator = CustomValidators.RequiredValidator();
    protected setControlProps(controlName: string, isRequired: boolean, nestedForm: FormGroup = undefined){
      const form = nestedForm ?? this.form;
      const control = form.controls[controlName];
      if(isRequired) { 
        control.addValidators(this.requiredValidator);
        control.enable();
      } else {
        control.removeValidators(this.requiredValidator);
        control.disable();
      }
      control.updateValueAndValidity();
    } 
    protected setControlPropsDisabled(controlName: string, isDisabled: boolean, nestedForm: FormGroup = undefined){
      const form = nestedForm ?? this.form;
      const control = form.controls[controlName];
      if(isDisabled) { 
        control.enable();
      } else {
        control.disable();
      }
      control.updateValueAndValidity();
    }
    public scrollToBottom() {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight + 1000,
          left: 0,
          behavior: "smooth"
        });
      }, 10);
    }
    protected scrollToFirstInvalidControl() {
      const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector(
        "form [formcontrolname].ng-invalid"
      );
      if(!firstInvalidControl){ return;}
      window.scroll({
        top: this.getTopOffset(firstInvalidControl),
        left: 0,
        behavior: "smooth"
      });
    }
    private getTopOffset(controlEl: HTMLElement): number {
      const labelOffset = 50;
      return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
    }
    resetDatepicker(datepicker, inputControls: string) {
      event.stopPropagation();
      datepicker.navigateTo({ year: 0, month: 0, day: 0 });
      this.form.controls[inputControls].setValue(null);
    }
}
