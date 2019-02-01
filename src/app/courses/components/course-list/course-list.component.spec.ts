import {
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  Component,
  Input,
  Output,
  EventEmitter,
  Pipe,
  PipeTransform
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseListComponent } from './course-list.component';
import { CoursesService } from '../..';
import { ICourse } from '../../../shared';
import { FilterPipe } from '../../../shared/pipes';

@Component({ selector: 'learn-portal-course-list-item', template: '' })
class CourseListItemStubComponent {
  @Input() course: ICourse;
  @Output() itemDeleted = new EventEmitter<string>();

  emitItemDeletedEvent() {
    this.itemDeleted.emit(this.course.id);
  }
}

@Component({
  selector: 'learn-portal-search-course',
  template: ''
})
export class SearchCourseStubComponent {
  constructor() {}

  @Output() searchActivated = new EventEmitter<string>();

  emitActivateSearchEvent() {
    this.searchActivated.emit('2');
  }
}

@Pipe({
  name: 'orderBy'
})
export class OrderByStubPipe implements PipeTransform {
  transform(collection: ICourse[]): ICourse[] {
    return collection.sort(
      (courseA, courseB) =>
        courseB.creationDate.getTime() - courseA.creationDate.getTime()
    );
  }
}

describe('CourseListComponent', () => {
  const coursesServiceStub = {
    getListOfCourses: (): ICourse[] => [
      {
        creationDate: new Date('2008-2-13'),
        description: `Lorem ipsum!`,
        duration: 330,
        id: '2',
        title: 'Course 2 title',
        topRated: false
      },
      {
        creationDate: new Date('2015-8-19'),
        description: `Lorem!`,
        duration: 120,
        id: '1',
        title: 'Course 1 title',
        topRated: true
      }
    ]
  };
  const FilterStubPipe = {
    transform(collection: ICourse[], field: string, value: string): ICourse[] {
      return collection.filter(item =>
        (<string>item[field]).match(new RegExp(value, 'i'))
      );
    }
  };
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CourseListComponent,
        CourseListItemStubComponent,
        OrderByStubPipe,
        SearchCourseStubComponent
      ],
      providers: [
        { provide: CoursesService, useValue: coursesServiceStub },
        { provide: FilterPipe, useValue: FilterStubPipe }
      ],
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

  it(`It should call function onSearchActivated and filter courses by title
      from searchActivated event, when search-course component emits
      such event`, () => {
    let searchCourseComponent: DebugElement;
    let listOfCoursesInHtml: DebugElement[];

    fixture.detectChanges();

    searchCourseComponent = fixture.debugElement.query(
      By.css('learn-portal-search-course')
    );

    spyOn(component, 'onSearchActivated').and.callThrough();

    (<SearchCourseStubComponent>(
      searchCourseComponent.componentInstance
    )).emitActivateSearchEvent();

    expect(component.onSearchActivated).toHaveBeenCalledWith('2');
    expect(component.courses.length).toEqual(1);

    fixture.detectChanges();

    listOfCoursesInHtml = fixture.debugElement.queryAll(
      By.css('ul>li>learn-portal-course-list-item')
    );

    expect(listOfCoursesInHtml.length).toEqual(1);

    expect(listOfCoursesInHtml[0].componentInstance.course.title).toEqual(
      'Course 2 title'
    );
  });
});
