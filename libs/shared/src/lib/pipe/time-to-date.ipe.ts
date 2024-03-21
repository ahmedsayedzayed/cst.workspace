import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'timeToDate' })
export class TimeToDatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): Date {
        const matcher = /\d+:\d+/;
        if(!value){
            return new Date();
        }
        const [hour, minute] = value.match(matcher)[0].split(":").map(Number);
        const date:any = new Date();
        date.setHours(hour, minute, 0, 0);
        return date;

    }
}