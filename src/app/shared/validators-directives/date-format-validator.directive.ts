import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

import { dateFormatValidator } from '../validators';

@Directive({
  selector: '[onlyValidDateFormat]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateFormatValidatorDirective,
      multi: true
    }
  ]
})
export class DateFormatValidatorDirective implements Validator {
  validate = dateFormatValidator;
}
