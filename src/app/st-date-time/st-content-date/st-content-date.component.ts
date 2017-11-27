import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
  // tslint:disable-next-line
  selector: 'st-content-date',
  templateUrl: './st-content-date.component.html',
  styleUrls: ['./st-content-date.component.scss']
})
export class StContentDateComponent {
  public weeks: Array<Array<Moment>> = [];
  private _baseDate: Date;

  get monthName(): string {
    return moment(this._baseDate).format('MMM Y');
  }
  @Input() set baseDate(value: Date) {
    this._baseDate = value;
    this.initDatesMatrix();
  };
  @Input() selectedDate: Moment;
  @Output() select: EventEmitter<{ date: Moment }> = new EventEmitter();

  get weekDaysNames(): string[] {
    if (!this.weeks || this.weeks.length === 0 || this.weeks[0].length === 0) {
      return;
    }
    const week = this.weeks[0];
    return week.map((day: Moment) => day.format('dd'));
  }

  private initDatesMatrix() {
    this.weeks = [];
    const baseDate = moment(this._baseDate);
    const startOfMonth = moment(baseDate).startOf('month');
    const endOfMonth = moment(baseDate).endOf('month');
    const startOfWeek = moment(startOfMonth).startOf('week');
    const dateOfMonth = moment(startOfWeek);
    const weeksInMonth = endOfMonth.week() > startOfMonth.week()
      ? endOfMonth.week() - startOfMonth.week()
      : startOfMonth.weeksInYear() - startOfMonth.week();

    let week: Moment[];
    let nextDate = moment(dateOfMonth);

    for (let w = 0; w < (weeksInMonth + 1); w++) {

      week = [];

      for (let d = 0; d < 7; d++) {
        week.push(nextDate);
        nextDate = moment(nextDate).add(1, 'day');
      }

      this.weeks.push(week);
    }
  }

  isDateActive(day: Moment): boolean {
    const startOfDate = moment(this.selectedDate).startOf('day');
    return startOfDate.toISOString() === day.toISOString();
  }

  selectDate(day: Moment) {
    if (this.isDateDisabled(day)) {
      return;
    }
    this.select.emit({
      date: day,
    });
  }

  isDateDisabled(day: Moment): boolean {
    const base: Moment = moment(this._baseDate);
    return day.isBefore(base.startOf('month')) || day.isAfter(base.endOf('month')) || day.isBefore(moment().startOf('day'));
  }
}
