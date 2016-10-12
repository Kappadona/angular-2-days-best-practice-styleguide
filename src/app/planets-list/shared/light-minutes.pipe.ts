import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lightMinutes'
})
export class LightMinutesPipe implements PipeTransform {
  transform(distance: any): string {
    if (typeof distance === 'number') {
      const minutes = distance / 0.3 / 60;
      return minutes.toFixed(2);
    } else if (typeof distance === 'undefined') {
      return;
    }
    throw new Error('No number submitted');
  }
}
