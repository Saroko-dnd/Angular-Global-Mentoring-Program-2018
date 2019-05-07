import { AbstractControl, ValidationErrors } from '@angular/forms';

export function isNumberValidator(
  control: AbstractControl
): ValidationErrors | null {
  const valueIsNumber = typeof control.value === 'number';

  return valueIsNumber ? null : { valueIsNotNumber: { value: control.value } };
}
