import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(duration: number): Observable<string> {
    return this.translate
      .stream(['COURSE_DURATION_HOURS', 'COURSE_DURATION_MINUTES'])
      .pipe(
        map(translations => {
          if (duration === null) {
            return '';
          } else if (duration >= 60) {
            return `${Math.trunc(duration / 60)}${
              translations.COURSE_DURATION_HOURS
            } ${duration % 60}${translations.COURSE_DURATION_MINUTES}`;
          } else {
            return `${duration}${translations.COURSE_DURATION_MINUTES}`;
          }
        })
      );
  }
}
