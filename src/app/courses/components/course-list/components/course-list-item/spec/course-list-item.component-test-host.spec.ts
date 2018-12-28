import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from '../course-list-item.component';
import { ICourse } from 'src/app/shared';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <learn-portal-course-list-item
    [course]="courseItem"
    (itemDeleted)="onItemDeleted($event)">
    </learn-portal-course-list-item>`
})
class TestHostComponent {
  courseItem: ICourse = {
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
  deletedCourseId: string;
  onItemDeleted(deletedCourseId: string) {this.deletedCourseId = deletedCourseId; }
}

describe('CourseListItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent, TestHostComponent ]
    })
    .compileComponents();
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
