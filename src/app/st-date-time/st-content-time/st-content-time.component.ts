import {Component, OnInit} from '@angular/core';
import {Moment} from 'moment';
import * as moment from 'moment';

@Component({
  // tslint:disable-next-line
  selector: 'st-content-time',
  templateUrl: './st-content-time.component.html',
  styleUrls: ['./st-content-time.component.scss']
})
export class StContentTimeComponent implements OnInit {

  private date: Moment = moment(new Date()).add(3, 'hour');

  public activeValue: Moment;

  public timeStamps: any[];

  constructor() { }

  ngOnInit() {
    this.activeValue = moment(this.date.toISOString());
    this.timeStamps = [];
    const value = moment(this.date.toISOString());
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
    this.activeValue.hour(hour);
  }

}
