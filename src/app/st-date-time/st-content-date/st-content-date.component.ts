import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
  // tslint:disable-next-line
  selector: 'st-content-date',
  templateUrl: './st-content-date.component.html',
  styleUrls: ['./st-content-date.component.scss']
})
export class StContentDateComponent implements OnInit {
  public weeks: Array<Array<Moment>> = [];

  @Input() baseDate: Date;

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

  constructor() { }

  ngOnInit() {
    this.initDatesMatrix();
  }



  private initDatesMatrix() {
    const baseDate = moment(this.baseDate);
    const startOfMonth = moment(baseDate.toISOString()).startOf('month');
    const startOfWeek = moment(startOfMonth.toISOString()).startOf('week');
    const dateOfMonth = moment(startOfWeek.toISOString());

    let week: Moment[];
    for (let w = 0; w < 6; w++) {

      week = [];

      for (let d = 0; d < 7; d++) {

        week.push(dateOfMonth.add(1, 'day'));

      }

      this.weeks[w] = week;
    }

    console.log(this.weeks);
  }
}
