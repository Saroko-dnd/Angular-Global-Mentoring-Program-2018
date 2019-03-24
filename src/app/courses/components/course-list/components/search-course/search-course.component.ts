import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

import {fromEvent, Subscription} from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'learn-portal-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit, OnDestroy {
  constructor() {}

  @Output() searchActivated = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputRef: ElementRef;
  inputSearchValue = '';
  searchInputSubscriber: Subscription;

  activateSearch() {
    this.searchActivated.emit(this.inputSearchValue);
  }

  ngOnInit() {
    const searchInputEventObservable = fromEvent(this.searchInputRef.nativeElement, 'input');

    this.searchInputSubscriber = searchInputEventObservable.pipe(
      debounceTime(1000),
      filter((e: any) => e.target.value.length >= 3),
    ).subscribe(e => this.activateSearch());
  }

  ngOnDestroy() {
    this.searchInputSubscriber.unsubscribe();
  }
}
