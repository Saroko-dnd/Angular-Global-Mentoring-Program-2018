import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDurationInputComponent } from './course-duration-input.component';

describe('CourseDurationInputComponent', () => {
  let component: CourseDurationInputComponent;
  let fixture: ComponentFixture<CourseDurationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDurationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDurationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
