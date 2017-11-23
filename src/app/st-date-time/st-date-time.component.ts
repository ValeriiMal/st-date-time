import {Component, OnInit} from '@angular/core';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import * as moment from 'moment';
import { Moment } from 'moment';
import {VIEW_TYPE} from './view-type.enum';

@Component({
  // tslint:disable-next-line
  selector: 'st-date-time',
  templateUrl: './st-date-time.component.html',
  styleUrls: ['./st-date-time.component.scss'],
})
export class StDateTimeComponent implements OnInit {
  public viewType: VIEW_TYPE;
  public VIEW_TYPE = VIEW_TYPE;

  get formattedDate(): String {
    return this._selectedDateMoment.format('ll');
  }

  get selectedDate(): Moment {
    return this._selectedDateMoment;
  }

  set selectedDate(value: Moment) {
    this._selectedDateMoment = value;
  }

  private _selectedDateMoment: Moment;

  constructor() { }

  ngOnInit() {
    this.viewType = VIEW_TYPE.DATE;
    this.initSelectedDate();
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

  toggleView() {
    this.viewType = this.viewType === VIEW_TYPE.DATE ? VIEW_TYPE.TIME : VIEW_TYPE.DATE;
  }
}
