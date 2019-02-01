import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderByPipe } from './pipes';
import { FilterPipe } from './pipes';
import { DateInputComponent } from './components/date-input/date-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OrderByPipe, FilterPipe, DateInputComponent],
  exports: [OrderByPipe, FilterPipe, DateInputComponent],
  providers: [FilterPipe]
})
export class SharedModule {}
