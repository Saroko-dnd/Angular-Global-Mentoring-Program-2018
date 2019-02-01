import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'learn-portal-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss']
})
export class CourseDurationComponent implements OnInit {

  @Input() inputId: string;

  inputValue: number;

  constructor() { }

  ngOnInit() {
  }

}
