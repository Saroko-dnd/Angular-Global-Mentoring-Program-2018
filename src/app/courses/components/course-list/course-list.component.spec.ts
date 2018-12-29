import {
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseListComponent } from './course-list.component';
import { CoursesService } from '../..';
import { ICourse } from 'src/app/shared';

@Component({ selector: 'learn-portal-course-list-item', template: '' })
class CourseListItemStubComponent {
  @Input() course: ICourse;
  @Output() itemDeleted = new EventEmitter<string>();

  emitItemDeletedEvent() {
    this.itemDeleted.emit(this.course.id);
  }
}

describe('CourseListComponent', () => {
  const coursesServiceStub = {
    getListOfCourses: (): ICourse[] => [
      {
        date: new Date('2015-8-19'),
        description: `Lorem!`,
        duration: '2h',
        id: '1',
        title: 'Course 1 title'
      },
      {
        date: new Date('2008-2-13'),
        description: `Lorem ipsum!`,
        duration: '5h 30min',
        id: '2',
        title: 'Course 2 title'
      }
    ]
  };
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent, CourseListItemStubComponent],
      providers: [{ provide: CoursesService, useValue: coursesServiceStub }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
  });

  it('It should get list of courses from CoursesService in ngOnInit hook', () => {
    component.ngOnInit();

    const dateElement = fixture.debugElement.queryAll(
      By.css('ul>li>learn-portal-course-list-item')
    );

    expect(component.courses).toEqual(coursesServiceStub.getListOfCourses());
  });

  it('It should create learn-portal-course-list-item elements for each course inside ul element', () => {
    let listOfCoursesInHtml: DebugElement[];

    fixture.detectChanges();

    listOfCoursesInHtml = fixture.debugElement.queryAll(
      By.css('ul>li>learn-portal-course-list-item')
    );

    expect(listOfCoursesInHtml.length).toBe(2);

    for (let courseIndex = 0; courseIndex < 2; ++courseIndex) {
      expect(
        (<CourseListItemStubComponent>(
          listOfCoursesInHtml[courseIndex].componentInstance
        )).course
      ).toEqual(component.courses[courseIndex]);
    }
  });

  it('It should call function onItemDeleted with course id as an argument and print it in console', () => {
    let listOfCoursesInHtml: DebugElement[];

    fixture.detectChanges();

    listOfCoursesInHtml = fixture.debugElement.queryAll(
      By.css('ul>li>learn-portal-course-list-item')
    );

    spyOn(component, 'onItemDeleted').and.callThrough();
    spyOn(console, 'log');

    for (let courseIndex = 0; courseIndex < 2; ++courseIndex) {
      (<CourseListItemStubComponent>(
        listOfCoursesInHtml[courseIndex].componentInstance
      )).emitItemDeletedEvent();

      expect(component.onItemDeleted).toHaveBeenCalledWith(
        component.courses[courseIndex].id
      );

      expect(console.log).toHaveBeenCalledWith(
        `Course with id ${component.courses[courseIndex].id} was deleted`
      );
    }
  });
});
