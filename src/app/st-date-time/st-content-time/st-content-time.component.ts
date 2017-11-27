import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Moment} from 'moment';
import * as moment from 'moment';

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

  private setTimeStamps() {
    this.timeStamps = [];
    const value = moment(this.date);
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
    this.selectTime.emit({
      date: moment(this.date).hour(hour),
    });
  }
}
