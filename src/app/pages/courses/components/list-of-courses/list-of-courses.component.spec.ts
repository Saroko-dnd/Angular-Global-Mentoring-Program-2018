import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCoursesComponent } from './list-of-courses.component';

describe('ListOfCoursesComponent', () => {
  let component: ListOfCoursesComponent;
  let fixture: ComponentFixture<ListOfCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
