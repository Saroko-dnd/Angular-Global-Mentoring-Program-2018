import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCourseComponent } from './create-new-course.component';

describe('CreateNewCourseComponent', () => {
  let component: CreateNewCourseComponent;
  let fixture: ComponentFixture<CreateNewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
