import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

import { selectedAuthorsValidator } from '../validators/authors-selector.validator';

@Directive({
  selector: '[onlyValidDateFormat]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AuthorsSelectorValidatorDirective,
      multi: true
    }
  ]
})
export class AuthorsSelectorValidatorDirective implements Validator {
  validate = selectedAuthorsValidator;
}
