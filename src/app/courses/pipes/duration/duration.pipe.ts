import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    if (duration === null) {
      return '';
    } else if (duration >= 60) {
      return `${Math.trunc(duration / 60)}h ${duration % 60}min`;
    } else {
      return `${duration}min`;
    }
  }
}
