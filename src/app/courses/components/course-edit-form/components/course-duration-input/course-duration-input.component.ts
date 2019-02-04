import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { IInputEvent } from 'src/app/shared/types';

const noop = () => {};

export const COURSE_DURATION_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseDurationInputComponent),
  multi: true
};

@Component({
  selector: 'learn-portal-course-duration-input',
  templateUrl: './course-duration-input.component.html',
  styleUrls: ['./course-duration-input.component.scss'],
  providers: [COURSE_DURATION_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CourseDurationInputComponent
  implements OnInit, ControlValueAccessor {
  @Input() inputId: string;
  @Input() required: boolean;

  private innerValue: number;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() {}

  ngOnInit() {}

  onInput(e: IInputEvent) {
    if ((<HTMLInputElement>e.srcElement).value) {
      (<HTMLInputElement>e.srcElement).value =
        '' + Math.abs(+(<HTMLInputElement>e.srcElement).value);
    }
  }

  get value(): number {
    return this.innerValue;
  }

  set value(value: number) {
    value = value ? Math.abs(value) : value;

    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: number): void {
    value = value ? Math.abs(value) : value;

    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // There is no need for that now
  }
}
