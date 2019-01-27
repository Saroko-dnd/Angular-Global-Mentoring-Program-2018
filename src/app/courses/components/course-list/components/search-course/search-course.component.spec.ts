import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCourseComponent } from './search-course.component';

describe('SearchCourseComponent', () => {
  let component: SearchCourseComponent;
  let fixture: ComponentFixture<SearchCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCourseComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should call function activateSearch on search button click and emit searchActivated event with input value as an argument', () => {
    const testInputValue = 'test course search input value';
    const searchButton = fixture.debugElement.query(
      By.css('.search-course-button')
    );
    const searchInput = fixture.debugElement.query(
      By.css('.search-course-input')
    );

    spyOn(component, 'activateSearch').and.callThrough();
    spyOn(component.searchActivated, 'emit');

    (<HTMLInputElement>searchInput.nativeElement).value = testInputValue;
    (<HTMLInputElement>searchInput.nativeElement).dispatchEvent(
      new Event('input')
    );
    fixture.detectChanges();

    searchButton.triggerEventHandler('click', null);

    expect(component.activateSearch).toHaveBeenCalled();
    expect(component.searchActivated.emit).toHaveBeenCalledWith(
      (<HTMLInputElement>searchInput.nativeElement).value
    );
  });
});
