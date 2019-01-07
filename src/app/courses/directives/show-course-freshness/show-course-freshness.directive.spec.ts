import { ShowCourseFreshnessDirective } from './show-course-freshness.directive';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

@Component({
  template: `
    <div [lpShowCourseFreshness]="date"></div>
  `,
  styles: ['div { border-color: red; }']
})
export class TestHostComponent {
  constructor() {}

  date: Date;
}

describe('ShowCourseFreshnessDirective', () => {
  const oldDate = new Date('2017-6-12');
  const recentDate = new Date(Date.now());
  const futureDate = new Date(Date.now());
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let divElement: HTMLElement;
  let borderColor: string;

  recentDate.setDate(recentDate.getDate() - 5);
  futureDate.setDate(futureDate.getDate() + 5);

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestHostComponent, ShowCourseFreshnessDirective]
    }).createComponent(TestHostComponent);

    component = fixture.componentInstance;

    divElement = (<HTMLElement>fixture.nativeElement).querySelector('div');
    divElement.style.borderColor = 'red';
  });

  it('Should not change border color of the course if it was created more than 14 days ago', () => {
    component.date = oldDate;

    fixture.detectChanges();

    borderColor = divElement.style.borderColor;

    expect(borderColor).toBe('red');
  });

  it('Should change border color of the course to green if course was created no more than 14 days ago', () => {
    component.date = recentDate;

    fixture.detectChanges();

    borderColor = divElement.style.borderColor;

    expect(borderColor).toBe('green');
  });

  it('Should change border color of the course to blue if course will be created in future', () => {
    component.date = futureDate;

    fixture.detectChanges();

    borderColor = divElement.style.borderColor;

    expect(borderColor).toBe('blue');
  });
});
