import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDateInputComponent } from './course-date-input.component';

describe('CourseDateInputComponent', () => {
  let component: CourseDateInputComponent;
  let fixture: ComponentFixture<CourseDateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
