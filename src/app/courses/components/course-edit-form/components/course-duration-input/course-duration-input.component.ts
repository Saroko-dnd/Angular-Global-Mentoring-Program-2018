import { Component, forwardRef, Input, OnInit, OnDestroy } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl
} from '@angular/forms';

import { Subscription } from 'rxjs';

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
  implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() inputId: string;
  @Input() required: boolean;

  innerValue = new FormControl('');
  innerValueSubscriber: Subscription;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() {}

  ngOnInit() {
    this.innerValueSubscriber = this.innerValue.valueChanges.subscribe(
      value => {
        if (typeof value === 'number') {
          if (value < 0) {
            this.innerValue.setValue(Math.abs(value));
          } else {
            this.onChangeCallback(value);
          }
        }
      }
    );
  }

  get value(): number {
    return this.innerValue.value;
  }

  set value(value: number) {
    value = value ? Math.abs(value) : value;
    if (value !== this.innerValue.value) {
      this.innerValue.setValue(value);
    }
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: number): void {
    value = value ? Math.abs(value) : value;

    if (value !== this.innerValue.value) {
      this.innerValue.setValue(value);
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

  ngOnDestroy(): void {
    this.innerValueSubscriber.unsubscribe();
  }
}
