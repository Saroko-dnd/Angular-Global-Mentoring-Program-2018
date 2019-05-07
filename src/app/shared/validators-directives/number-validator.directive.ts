import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

import { isNumberValidator } from '../validators';

@Directive({
  selector: '[onlyNumbers]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumberValidatorDirective,
      multi: true
    }
  ]
})
export class NumberValidatorDirective implements Validator {
  validate = isNumberValidator;
}
