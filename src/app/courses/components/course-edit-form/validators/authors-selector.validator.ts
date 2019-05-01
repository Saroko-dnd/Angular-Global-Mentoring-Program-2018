import { AbstractControl, ValidationErrors } from '@angular/forms';

export function selectedAuthorsValidator(
  control: AbstractControl
): ValidationErrors | null {
  const noSelectedAuthors = !control.value.length;

  return noSelectedAuthors
    ? { noSelectedAuthors: { value: control.value } }
    : null;
}
