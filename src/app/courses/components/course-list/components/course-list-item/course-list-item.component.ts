import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ICourse } from '../../../../../shared/types/icourse';

@Component({
  selector: 'learn-portal-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent {
  constructor() {}

  @Input() course: ICourse;

  @Output() itemDeleted = new EventEmitter<string>();

  deleteCourse() {
    this.itemDeleted.emit(this.course.id);
  }
}
