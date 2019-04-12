import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NgSelectModule } from '@ng-select/ng-select';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import {
  NgbModalModule,
  NgbPaginationModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';

import {
  CourseDurationInputComponent,
  CourseEditFormComponent,
  CourseListComponent,
  CourseListItemComponent,
  SearchCourseComponent
} from './components';

import { coursesRoutes } from './courses.routing';

import { CoursesService } from './services';
import { ShowCourseFreshnessDirective } from './directives';

import { DurationPipe } from './pipes';
import { SharedModule } from '../shared';
import { CourseListEffects } from './components/course-list/store/course-list.effects';
import { courseListStateReducer } from './components/course-list/store/course-list.reducers';
import { courseEditFormStateReducer } from './components/course-edit-form/store/course-edit-form.reducers';
import { CourseEditFormEffects } from './components/course-edit-form/store/course-edit-form.effects';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    EffectsModule.forFeature([CourseListEffects, CourseEditFormEffects]),
    FormsModule,
    NgbModalModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    RouterModule.forRoot(coursesRoutes),
    SharedModule,
    StoreModule.forFeature('courses', {
      list: courseListStateReducer,
      editForm: courseEditFormStateReducer
    })
  ],
  declarations: [
    CourseDurationInputComponent,
    CourseEditFormComponent,
    CourseListComponent,
    CourseListItemComponent,
    DurationPipe,
    SearchCourseComponent,
    ShowCourseFreshnessDirective
  ],
  exports: [CourseListComponent, CourseEditFormComponent],
  providers: [
    CoursesService,
    { provide: 'COURSES_LIST_API_PATH', useValue: '/courses' },
    { provide: 'COURSES_CREATE_API_PATH', useValue: '/courses/new' },
    { provide: 'COURSES_UPDATE_API_PATH', useValue: '/courses/update' },
    { provide: 'AUTHORS_API_PATH', useValue: '/authors' }
  ]
})
export class CoursesModule {}
