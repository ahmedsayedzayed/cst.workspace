import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstChar'
})
export class FirstCharPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) { return ''; }
    return value[0];
  }

}
