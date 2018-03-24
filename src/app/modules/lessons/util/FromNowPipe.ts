import {Pipe} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fromNow'
})
export class FromNowPipe {
  transform(value: any): string {
    return moment(value).fromNow();
  }
}

export let fromNowPipeInjectables: Array<any> = [
  FromNowPipe
];

