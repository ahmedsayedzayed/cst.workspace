import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asString'
})
export class AsStringPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toString();
  }

}
