import { Component, OnInit, Input } from '@angular/core';

import { ICourse } from 'src/app/shared/types/icourse';

@Component({
  selector: 'learn-portal-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  constructor() {}

  @Input() course: ICourse;

  ngOnInit() {}
}
