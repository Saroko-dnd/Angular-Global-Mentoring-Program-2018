import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dateFormatValidator(
  control: AbstractControl
): ValidationErrors | null {
  const dateFormatIsValid = /^1*\d\/[1-3]*\d\/\d{4}, 1*\d:[0-5]\d [AP]M$/.test(
    control.value
  );

  return dateFormatIsValid
    ? null
    : { invalidDateValue: { value: control.value } };
}
