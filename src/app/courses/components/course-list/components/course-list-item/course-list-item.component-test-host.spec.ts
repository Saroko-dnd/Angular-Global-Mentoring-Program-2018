import {
  Component,
  Directive,
  Input,
  Pipe,
  PipeTransform
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { ICourse } from '../../../../../shared';
import { By } from '@angular/platform-browser';

const testCourseItem: ICourse = {
  authors: [],
  creationDate: new Date('2015-8-19'),
  description: `Lorem`,
  duration: 120,
  id: '1',
  title: 'Course 1 title',
  topRated: true
};
const testCourseDurationText = '2h 0min';

@Directive({
  selector: '[lpShowCourseFreshness]'
})
export class ShowCourseFreshnessStubDirective {
  constructor() {}

  @Input('lpShowCourseFreshness') courseDate: Date;
}

@Pipe({
  name: 'duration'
})
export class DurationStubPipe implements PipeTransform {
  transform(duration: number): string {
    return testCourseDurationText;
  }
}

@Component({
  template: `
    <learn-portal-course-list-item
      [course]="courseItem"
      (itemDeleted)="onItemDeleted($event)"
    >
    </learn-portal-course-list-item>
  `
})
class TestHostComponent {
  courseItem: ICourse = testCourseItem;
  deletedCourseId: string;
  onItemDeleted(deletedCourseId: string) {
    this.deletedCourseId = deletedCourseId;
  }
}

describe('CourseListItemComponent', () => {
  describe('course info rendering', () => {
    let component: CourseListItemComponent;
    let fixture: ComponentFixture<CourseListItemComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          CourseListItemComponent,
          DurationStubPipe,
          ShowCourseFreshnessStubDirective
        ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CourseListItemComponent);
      component = fixture.componentInstance;

      component.course = testCourseItem;

      fixture.detectChanges();
    });

    it('should render course title in uppercase inside h3 element', () => {
      const titleElement = fixture.debugElement.query(By.css('h3'));

      expect((<HTMLElement>titleElement.nativeElement).textContent).toEqual(
        testCourseItem.title.toUpperCase()
      );
    });

    it('should render course duration in format "hh h mm min" inside element with class "duration"', () => {
      const durationElement = fixture.debugElement.query(By.css('.duration'));

      expect((<HTMLElement>durationElement.nativeElement).textContent).toEqual(
        testCourseDurationText
      );
    });

    it('should render course date inside time element in format MM.dd.yyyy', () => {
      const dateElement = fixture.debugElement.query(By.css('time'));
      const expectedRenderedDate = '08.19.2015';

      expect((<HTMLElement>dateElement.nativeElement).textContent).toEqual(
        expectedRenderedDate
      );
    });

    it('should render course description inside p element', () => {
      const descriptionElement = fixture.debugElement.query(By.css('p'));

      expect(
        (<HTMLElement>descriptionElement.nativeElement).textContent
      ).toEqual(testCourseItem.description);
    });
  });

  describe('interactions with other components', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          CourseListItemComponent,
          TestHostComponent,
          DurationStubPipe,
          ShowCourseFreshnessStubDirective
        ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      testHost = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should emit itemDeleted event after delete button was clicked with course id as an argument', () => {
      const expectedDeletedCourseId = '1';
      const deleteButton = fixture.debugElement.query(By.css('.btn-danger'));

      deleteButton.triggerEventHandler('click', null);

      expect(testHost.deletedCourseId).toEqual(expectedDeletedCourseId);
    });
  });
});
