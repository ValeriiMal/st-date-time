import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StDateTimeComponent} from './st-date-time.component';
import { StContentDateComponent } from './st-content-date/st-content-date.component';
import { StContentTimeComponent } from './st-content-time/st-content-time.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StDateTimeComponent,
    StContentDateComponent,
    StContentTimeComponent,
  ],
  exports: [
    StDateTimeComponent,
  ],
})
export class StDateTimeModule { }
