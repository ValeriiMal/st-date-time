import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StDateTimeComponent} from './st-date-time.component';
import { StContentDateComponent } from './st-content-date/st-content-date.component';
import { StContentTimeComponent } from './st-content-time/st-content-time.component';
import { StDateTimeHeaderComponent } from './st-date-time-header/st-date-time-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StDateTimeComponent,
    StContentDateComponent,
    StContentTimeComponent,
    StDateTimeHeaderComponent,
  ],
  exports: [
    StDateTimeComponent,
  ],
})
export class StDateTimeModule { }
