import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StDateTimeComponent} from './st-date-time.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StDateTimeComponent,
  ],
  exports: [
    StDateTimeComponent,
  ],
})
export class StDateTimeModule { }
