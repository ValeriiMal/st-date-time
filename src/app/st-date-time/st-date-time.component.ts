import {Component, OnInit} from '@angular/core';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  // tslint:disable-next-line
  selector: 'st-date-time',
  templateUrl: './st-date-time.component.html',
  styleUrls: ['./st-date-time.component.scss'],
})
export class StDateTimeComponent implements OnInit {
  get formattedDate(): String {
    return this._selectedDateMoment.format('ll');
  }

  get selectedDate(): Moment {
    return this._selectedDateMoment;
  }

  set selectedDate(value: Moment) {
    this._selectedDateMoment = value;
  }

  get weekDaysNames(): string[] {
    return [
      'M',
      'T',
      'W',
      'Th',
      'F',
      'St',
      'S',
    ];
  }

  private _selectedDateMoment: Moment;

  dateMatrix: number[][] = [];

  constructor() { }

  ngOnInit() {
    this.initSelectedDate();
    this.initDatesMatrix();
  }

  private initSelectedDate() {
    const date = new Date();
    this.selectedDate = moment(date);
  }

  prev() {
    this.selectedDate.add(-1, 'month');
  }

  next() {
    this.selectedDate.add(1, 'month');
  }

  selectDate(day: number) {
    this.selectedDate.date(day);
  }

  private initDatesMatrix() {
    const startOfMonth = moment(this.selectedDate.toISOString()).startOf('month');
    const dateOfMonth = moment(startOfMonth.toISOString());
    const endOfMonth = moment(this.selectedDate.toISOString()).endOf('month');

    let week: number[];

    for (let w = 0; w < 6; w++) {

      week = [];

      for (let d = 0; d < 7; d++) {
        if (w === 0 && d === 0) {
          week.push(dateOfMonth.date());
        } else {
          week.push(dateOfMonth.add(1, 'day').date());
        }
      }

      this.dateMatrix[w] = week;
    }
  }
}
