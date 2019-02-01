import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'learn-portal-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {

  @Input() inputId: string;

  constructor() { }

  ngOnInit() {
  }

}
