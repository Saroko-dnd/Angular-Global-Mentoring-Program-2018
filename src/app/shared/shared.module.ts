import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [OrderByPipe],
  exports: [OrderByPipe]
})
export class SharedModule {}
