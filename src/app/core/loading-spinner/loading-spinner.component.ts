import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from '../services';

@Component({
  selector: 'learn-portal-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  isVisible: boolean;

  constructor(
    private loadingSpinnerService: LoadingSpinnerService,
  ) { }

  ngOnInit() {
    this.loadingSpinnerService.spinnerIsVisible.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

}
