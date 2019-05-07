import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'learn-portal-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit, OnDestroy {
  constructor() {}

  @Output() searchActivated = new EventEmitter<string>();

  searchInput = new FormControl('');
  searchInputSubscriber: Subscription;

  activateSearch() {
    this.searchActivated.emit(this.searchInput.value);
  }

  ngOnInit() {
    this.searchInputSubscriber = this.searchInput.valueChanges
      .pipe(
        debounceTime(1000),
        filter((value: string) => !value || value.length >= 3)
      )
      .subscribe(value => {
        this.activateSearch();
      });
  }

  ngOnDestroy() {
    this.searchInputSubscriber.unsubscribe();
  }
}
