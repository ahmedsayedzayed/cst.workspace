import { FormControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from "@angular/forms";

export class FilterFormControl extends FormControl {
    filterTitle: string;
    filterValue: any;
    filterValueFun: Function;
    splitBy: string;
  
    constructor(params: {
      formState?: any;
      validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
      asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;
      filterTitle?: string;
      filterValue?: string;
      filterValueFun?: Function;
      splitBy?: string;
    }) {
      super(params.formState, params.validatorOrOpts, params.asyncValidator);
      this.filterTitle = params.filterTitle;
      this.filterValue = params.filterValue;
      this.filterValueFun = params.filterValueFun;
      this.splitBy = params.splitBy;
    }
  }