import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[learnPortalCourseBorder]'
})
export class CourseBorderDirective implements OnInit {
  constructor(private element: ElementRef) {}

  @Input('learnPortalCourseBorder') courseDate: Date;

  ngOnInit() {
    const differenceInDays = Math.floor(
      (Date.now() - this.courseDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays <= 14 && differenceInDays > 0) {
      this.element.nativeElement.style.cssText =
        'border-color: green !important';
    } else if (differenceInDays < 0) {
      this.element.nativeElement.style.cssText =
        'border-color: blue !important';
    }
  }
}
