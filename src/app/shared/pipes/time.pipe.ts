import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: string): unknown {
    let date = moment(value).fromNow();
    return date;
  }

}
