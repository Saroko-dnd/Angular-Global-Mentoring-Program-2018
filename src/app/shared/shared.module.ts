import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderByPipe } from './pipes';
import { FilterPipe } from './pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [OrderByPipe, FilterPipe],
  exports: [OrderByPipe, FilterPipe],
  providers: [FilterPipe]
})
export class SharedModule {}
