import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ICourse } from 'src/app/shared/types/icourse';

@Component({
  selector: 'learn-portal-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  constructor() {}

  @Input() course: ICourse;

  @Output() itemDeleted = new EventEmitter<string>();

  deleteCourse() {
    this.itemDeleted.emit(this.course.id);
  }

  onDeleted(id: string) {
    console.log(id);
  }

  ngOnInit() {}
}
