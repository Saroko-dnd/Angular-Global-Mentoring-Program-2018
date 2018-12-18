import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'learn-portal-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {
  constructor() {}

  inputSearchValue = '';

  logSearchInputValue() {
    console.log(this.inputSearchValue);
  }

  ngOnInit() {}
}
