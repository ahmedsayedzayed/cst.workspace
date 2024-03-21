import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export class CustomValidators {
  static RequiredValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return Validators.required(control) || control.value.toString().trim() === ''
        ? { required: true }
        : null;
    };
  }
  static RequiredAttachmentValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return Validators.required(control) ||
        control.value.toString().trim() === '' ||
        control.value.toString().trim() === '0'
        ? { required: true }
        : null;
    };
  }
  static InvalidCharacterValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let foundedSpecialCharacter = this.specialCharactersInText(control.value);

      if (foundedSpecialCharacter.length > 0) {
        return { invalidCharacter: foundedSpecialCharacter };
      }

      return foundedSpecialCharacter.length > 0
        ? { invalidCharacter: foundedSpecialCharacter }
        : null;
    };
  }

  static specialCharactersInText(text) {
    let SpecialCharacter = '!$%&*<>[]{}"\'‘“;?+|^؟';
    let SpecialCharacterArr = Array.from(SpecialCharacter);
    let foundedSpecialCharacter = '';
    if (text !== undefined && text !== null) {
      SpecialCharacterArr.forEach(element => {
        if (String(text).indexOf(element) >= 0) {
          foundedSpecialCharacter += element || {};
        }
      });
    }
    return foundedSpecialCharacter;
  }

  static UrlValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let UrlPattern = new RegExp(
        '(https?://(?:www.|(?!www))[a-zA-Z0-9] [a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9] [a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})',
        'gmis'
      );
      const forbidden = UrlPattern.test(control.value) && (control.value.startsWith('https://') || control.value.startsWith('http://'));
      if (!control.value || control.value == '') {
        return null;
      } else return !forbidden ? { invalidUrlPattern: { value: control.value } } : null;
    };
  }
  static dateRangeValidator(end, start, publish): ValidatorFn {
    return control => {
      if (!control.value || control.value == '') return null;
      if (end >= start || end >= publish) {
        return { message: 'error message' };
      }
    };
  }

  static DateAfterOrSameValidator(pairControl: AbstractControl, errorMsg?: string): ValidatorFn {
    const error = {};
    error[errorMsg || 'validateDateAfter'] = true;
    return (control: AbstractControl): ValidationErrors | null => {
      let value = control.value;
      let pairValue = pairControl.value;

      if (!pairValue || !value) {
        return null;
      }
      value = new Date(value);
      pairValue = new Date(pairValue);
      if (pairValue > value) {
        return error;
      }
      return null;
    };
  }
  static DateTimeAfterOrSameValidator(pairControl: AbstractControl, errorMsg?: string): ValidatorFn {
    const error = {};
    error[errorMsg || 'validateDateTimeAfter'] = true;
    return (control: AbstractControl): ValidationErrors | null => {
      let value = control.value;
      let pairValue = pairControl.value;
      if (!pairValue || !value) {
        return null;
      }
      if (value <= pairValue){
        return error;
      }
      return null;
    };
  }
  static DateBeforeOrSameValidator(pairControl: AbstractControl, errorMsg?: string): ValidatorFn {
    const error = {};
    error[errorMsg || 'validateDateAfter'] = true;
    return (control: AbstractControl): ValidationErrors | null => {
      let value = control.value;
      let pairValue = pairControl.value;

      if (!pairValue || !value) {
        return null;
      }
      value = new Date(value);
      pairValue = new Date(pairValue);
      if (pairValue < value) {
        return error;
      }
      return null;
    };
  }
  static DateInFuture(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const today: Date = new Date();
      const selectedDate: Date = new Date(control.value);
      if (!today || !selectedDate) {
        return null;
      }
      if (today.setHours(0, 0, 0, 0) > selectedDate.setHours(0, 0, 0, 0)) {
        return { validateDateInFuture: true };
      }
      return null;
    };
  }
  static DateInpast(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const today: Date = new Date();
      const selectedDate: Date = new Date(control.value);
      if (!today || !selectedDate) {
        return null;
      }
      if (today.setHours(0, 0, 0, 0) < selectedDate.setHours(0, 0, 0, 0)) {
        return { DateInpast: true };
      }
      return null;
    };
  }
  static MobileValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null || control.value === undefined || control.value === '') {
        return null;
      }
      let mobilePattern = new RegExp('^(05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$');//Sa number
      //let mobilePattern = new RegExp('^(0|00)([1-9]{1,4})([0-9]{8,12})$');
      const forbidden = mobilePattern.test(control.value);
      return !forbidden ? { invalidMobile: { value: control.value } } : null;
    };
  }

  static ContactMobileValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null || control.value === undefined || control.value === '') {
        return null;
      }
      let mobilePattern = new RegExp('^([\\+,0-9]){0,1}([0-9]{1,13})$');//Sa number
      const forbidden = mobilePattern.test(control.value);
      return !forbidden ? { invalidMobile: { value: control.value } } : null;
    };
  }

  static userNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null || control.value === undefined || control.value === '') {
        return null;
      }
      let userNamePattern = new RegExp('^[a-zA-Z._]*$');
      const forbidden = userNamePattern.test(control.value);
      return !forbidden ? { invalidUserName: { value: control.value } } : null;
    };
  }

  static emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value == null || control.value === undefined || control.value === '') {
        return null;
      }
      let emailPattern = new RegExp('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}');
      const forbidden = emailPattern.test(control.value);
      return !forbidden ? { email: { value: control.value } } : null;
    };
  }
}
