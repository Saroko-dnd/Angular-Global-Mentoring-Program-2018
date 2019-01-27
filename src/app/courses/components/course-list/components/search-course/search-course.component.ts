import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'learn-portal-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent {
  constructor() {}

  @Output() searchActivated = new EventEmitter<string>();

  inputSearchValue = '';

  activateSearch() {
    this.searchActivated.emit(this.inputSearchValue);
  }
}
