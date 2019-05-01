import { AbstractControl, ValidationErrors } from '@angular/forms';

export function selectedAuthorsValidator(
  control: AbstractControl
): ValidationErrors | null {
  const noSelectedAuthors = !control.value.length;

  return noSelectedAuthors
    ? { invalidSelectedAuthorsValue: { value: control.value } }
    : null;
}
