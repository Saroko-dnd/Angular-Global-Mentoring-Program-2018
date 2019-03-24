import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {
  spinnerIsVisible: BehaviorSubject<boolean>;

  hide() {
    // timeout created only in order to show that loading spinner works
    setTimeout(() => {
      this.spinnerIsVisible.next(false);
    }, 500);
  }

  show() {
    this.spinnerIsVisible.next(true);
  }

  constructor() {
    this.spinnerIsVisible = new BehaviorSubject<boolean>(false);
  }
}
