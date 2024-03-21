import { isNullOrEmpty } from '@abp/ng.core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isNotNullOrEmpty'
})
export class IsNotNullOrEmptyStringPipe implements PipeTransform {

  transform(value: string | {}, ...args: unknown[]): boolean {
    if(value === null || value === undefined){ // Null Or Undefined
      return false;
    }else if(value instanceof String || typeof value === 'string'){ /// String
      return isNullOrEmpty(value);
    }else { // Object
      return true;
    }
  }

}
