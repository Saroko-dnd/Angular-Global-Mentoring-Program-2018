import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCoursesComponent } from './search-courses.component';

describe('SearchCoursesComponent', () => {
  let component: SearchCoursesComponent;
  let fixture: ComponentFixture<SearchCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
