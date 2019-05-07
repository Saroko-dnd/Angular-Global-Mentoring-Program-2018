import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  Validators
} from '@angular/forms';

import { Subscription } from 'rxjs';

import { IInputEvent } from 'src/app/shared/types';

const noop = () => {};

export const COURSE_DATE_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseDateInputComponent),
  multi: true
};

@Component({
  selector: 'learn-portal-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.scss'],
  providers: [COURSE_DATE_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CourseDateInputComponent
  implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() inputId: string;
  @Input() required: boolean;

  @ViewChild('courseDateInput') courseDateInput: ElementRef;

  innerValue = new FormControl('');
  innerValueSubscriber: Subscription;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() {}

  ngOnInit() {
    this.innerValueSubscriber = this.innerValue.valueChanges.subscribe(
      value => {
        this.onChangeCallback(value);
      }
    );
  }

  writeValue(value: string): void {
    this.innerValue.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.courseDateInput.nativeElement.disabled = isDisabled;
  }

  ngOnDestroy(): void {
    this.innerValueSubscriber.unsubscribe();
  }
}
