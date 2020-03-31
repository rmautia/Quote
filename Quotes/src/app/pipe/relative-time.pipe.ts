import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      const differenceInSeconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (differenceInSeconds < 30){
        return 'Just now';
      }
    }
  }
  
}
