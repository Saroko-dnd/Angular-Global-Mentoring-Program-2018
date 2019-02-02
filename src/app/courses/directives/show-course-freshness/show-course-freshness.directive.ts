import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[lpShowCourseFreshness]'
})
export class ShowCourseFreshnessDirective implements OnInit {
  constructor(private element: ElementRef) {}

  @Input('lpShowCourseFreshness') courseDate: Date;

  ngOnInit() {
    const differenceInDays = this.courseDate
      ? Math.floor(
          (Date.now() - this.courseDate.getTime()) / (1000 * 60 * 60 * 24)
        )
      : 0;

    if (differenceInDays <= 14 && differenceInDays > 0) {
      this.element.nativeElement.style.cssText =
        'border-color: green !important';
    } else if (differenceInDays < 0) {
      this.element.nativeElement.style.cssText =
        'border-color: blue !important';
    }
  }
}
