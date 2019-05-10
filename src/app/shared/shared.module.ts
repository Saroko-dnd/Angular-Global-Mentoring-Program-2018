import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderByPipe } from './pipes';
import { FilterPipe } from './pipes';
import { DateInputComponent } from './components/date-input/date-input.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [OrderByPipe, FilterPipe, DateInputComponent],
  exports: [OrderByPipe, FilterPipe, DateInputComponent, TranslateModule],
  providers: [FilterPipe]
})
export class SharedModule {}
