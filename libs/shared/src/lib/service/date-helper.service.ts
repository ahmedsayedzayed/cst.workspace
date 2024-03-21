import { Injectable } from '@angular/core';
import { DateDiff } from '../common-files/models/date-diff.model';

@Injectable({
  providedIn: 'root'})
export class DateHelper {

  readonly timezoneOffset = (new Date().getTimezoneOffset()) / 60;

  calculateTimeAgo(date: Date) {
    const dateDiff = {} as DateDiff;
    const now = new Date();
    const diff = now.valueOf() - date.valueOf();
    dateDiff.days = Math.floor(diff / 1000 / 60 / 60 / 24);
    dateDiff.hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    dateDiff.minutes = Math.floor(diff / 1000 / 60) % 60;
    dateDiff.seconds = Math.floor(diff / 1000) % 60;
    return dateDiff;
  }

  getArTimeAgoStr(dateDiff: DateDiff) {
    let arStr = 'منذ ';
    if (dateDiff.days === 0 && dateDiff.hours === 0 && dateDiff.minutes === 0) {
      arStr += ' أقل من دقيقة';
    }
    else {
      if (dateDiff.days > 0) {
        if (dateDiff.days === 1) {
          arStr += ' يوم';
        } else if (dateDiff.days === 2) {
          arStr += ' يومين';
        } else if (dateDiff.days > 2 && dateDiff.days < 11) {
          arStr += dateDiff.days + ' أيام';
        } else {
          arStr += dateDiff.days + ' يوم';
        }
        arStr += ' و ';
      }
      if (dateDiff.hours > 0) {
        if (dateDiff.hours === 1) {
          arStr += ' ساعة';
        } else if (dateDiff.hours === 2) {
          arStr += ' ساعتين';
        } else if (dateDiff.hours > 2 && dateDiff.hours < 11) {
          arStr += dateDiff.hours + ' ساعات';
        } else {
          arStr += dateDiff.hours + ' ساعة';
        }
        arStr += ' و ';
      }
      if (dateDiff.minutes > 0) {
        if (dateDiff.minutes === 1) {
          arStr += ' دقيقة';
        } else if (dateDiff.minutes === 2) {
          arStr += ' دقيقتين';
        } else if (dateDiff.minutes > 2 && dateDiff.minutes < 11) {
          arStr += dateDiff.minutes + ' دقائق';
        } else {
          arStr += dateDiff.minutes + ' دقيقة';
        }
      }
    }
    return arStr;
  }

  getEnTimeAgoStr(dateDiff: DateDiff) {
    let enStr = '';
    if (dateDiff.days === 0 && dateDiff.hours === 0 && dateDiff.minutes === 0) {
      enStr = 'less than a minute ago';
    }
    else {
      if (dateDiff.days > 0) {
        enStr += ` ${dateDiff.days} ${dateDiff.days > 1 ? 'days' : 'day'} and`;
      }
      if (dateDiff.hours > 0) {
        enStr += ` ${dateDiff.hours} ${dateDiff.hours > 1 ? 'hours' : 'hour'} and`;
      }
      if (dateDiff.minutes > 0){
        enStr += ` ${dateDiff.minutes} ${dateDiff.minutes > 1 ? 'minutes' : 'minute'} ago`;
      }
    }
    return enStr;
  }

  utcDateToLocalDate(date: Date) {
    date.setHours(date.getHours() - this.timezoneOffset);
    return date;
  }

}
