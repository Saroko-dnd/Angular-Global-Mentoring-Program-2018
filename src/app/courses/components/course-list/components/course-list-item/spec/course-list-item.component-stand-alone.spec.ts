import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from '../course-list-item.component';
import { ICourse } from 'src/app/shared';
import { By } from '@angular/platform-browser';

describe('CourseListItemComponent', () => {
  const course: ICourse = {
    date: new Date('2015-8-19'),
    description: `Lorem ipsum dolor sit amet, consectetur
    adipisicing elit. Ducimus, magnam! Distinctio, incidunt rem, accusantium
    est ea totam nihil dolores tenetur excepturi expedita quod unde dolore
    amet, eos voluptates similique quam. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Omnis, repudiandae impedit repellendus quos
    laborum atque aut id necessitatibus asperiores minus debitis fugit amet
    dolorum assumenda nam obcaecati vitae in sequi!`,
    duration: '2h',
    id: '1',
    title: 'Course 1 title'
  };
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;

    component.course = course;

    fixture.detectChanges();
  }));

  it('should render properly all course info (except id)', () => {
    const titleElement = fixture.debugElement.query(By.css('h3'));
    const durationElement = fixture.debugElement.query(By.css('.duration'));
    const dateElement = fixture.debugElement.query(By.css('time'));
    const descriptionElement = fixture.debugElement.query(By.css('p'));
    const expectedRenderedDate = '08.19.2015';

    expect(titleElement.nativeElement.textContent).toEqual(course.title);
    expect(durationElement.nativeElement.textContent).toEqual(course.duration);
    expect(dateElement.nativeElement.textContent).toEqual(expectedRenderedDate);
    expect(descriptionElement.nativeElement.textContent).toEqual(
      course.description
    );
  });
});
