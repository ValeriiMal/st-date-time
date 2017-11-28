import {Component, forwardRef, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import {VIEW_TYPE} from './view-type.enum';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  // tslint:disable-next-line
  selector: 'st-date-time',
  templateUrl: './st-date-time.component.html',
  styleUrls: ['./st-date-time.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StDateTimeComponent),
      multi: true
    }
  ],
})
export class StDateTimeComponent implements OnInit, ControlValueAccessor {
  @Input() btnText = 'Apply';
  public viewType: VIEW_TYPE;
  public VIEW_TYPE = VIEW_TYPE;
  public baseDate: Moment;
  public selectedDate: Moment;
  private propagateChange: (value: any) => void;

  writeValue(obj: any): void {
    let date: any = obj;
    if (!moment(obj).isValid()) {
      date = new Date();
    }
    date = moment(date);
    this.selectedDate = this.setDefaultTime(date);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  ngOnInit() {
    this.viewType = VIEW_TYPE.DATE;
    this.selectedDate = moment(new Date());
    this.selectedDate.minute(0);
    this.initBaseDate();
  }

  private initBaseDate() {
    this.baseDate = moment(new Date()).startOf('month');
  }

  prev() {
    this.baseDate = moment(this.baseDate).add(-1, 'month');
  }

  next() {
    this.baseDate = moment(this.baseDate).add(1, 'month');
  }

  toggleView() {
    this.viewType = this.viewType === VIEW_TYPE.DATE ? VIEW_TYPE.TIME : VIEW_TYPE.DATE;
  }

  onApply() {
    this.propagateChange(this.selectedDate.toDate());
  }

  onDateSelect($event: { date: Moment }) {
    if (!$event || !$event.date) {
      return;
    }
    const date: Moment = $event.date;
    this.selectedDate = this.setDefaultTime(date);
  }

  onTimeSelect($event: { date: Moment }) {
    this.selectedDate = moment($event.date);
    this.viewType = VIEW_TYPE.DATE;
  }

  private setDefaultTime(date: Moment): Moment {
    const hour = date.hour() < 15 ? 15 : date.hour();
    return moment(date).hour(hour).minute(0).second(0);
  }
}
