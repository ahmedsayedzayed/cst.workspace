import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlContent'
})
export class HtmlContentPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(!value){
      return '';
    }
    return value.split('\n').join('<br/>');
  }

}
