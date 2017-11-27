import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Moment} from 'moment';
import * as moment from 'moment';
import Diff = moment.unitOfTime.Diff;

@Component({
  // tslint:disable-next-line
  selector: 'st-content-time',
  templateUrl: './st-content-time.component.html',
  styleUrls: ['./st-content-time.component.scss']
})
export class StContentTimeComponent {

  private _date: Moment;

  @Input() set date(value: Moment) {
    this._date = value;
    this.setTimeStamps();
  };
  @Output() selectTime = new EventEmitter();

  get date(): Moment {
    return this._date;
  }

  public timeStamps: any[];
  public selectedDateWithTime: Moment;

  private setTimeStamps() {
    const today: Moment = moment(new Date());
    if (this.date.isBefore(today, 'day')) {
      return;
    }
    const isToday = this.date.isSame(moment(new Date()), 'day');
    const value = isToday ? moment(new Date()) : moment(this.date).hour(0);

    this.timeStamps = [];
    this.timeStamps.push(value.hour());
    let i = 0;
    value.add(1, 'hour');
    while (value.hour() > this.timeStamps[i]) {
      this.timeStamps.push(value.hour());
      value.add(1, 'hour');
      i++;
    }
  }

  selectTimeStamp(hour: number) {
    this.selectedDateWithTime = moment(this.date).hour(hour);
    this.selectTime.emit({
      date: this.selectedDateWithTime,
    });
  }

  getTimeLabel(hour: number): string {
    const date: Moment = moment(this.date);
    if (!date.isValid() || !date.hour(hour).isValid()) {
      return;
    }
    return date.hour(hour).format('HH:mm');
  }
}
