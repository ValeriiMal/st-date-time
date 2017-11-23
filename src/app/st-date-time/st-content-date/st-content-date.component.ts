import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
  // tslint:disable-next-line
  selector: 'st-content-date',
  templateUrl: './st-content-date.component.html',
  styleUrls: ['./st-content-date.component.scss']
})
export class StContentDateComponent implements OnInit {
  public dateMatrix: any = [];

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
    const selectedDate: Moment = moment(new Date());
    const startOfMonth = moment(selectedDate.toISOString()).startOf('month');
    const dateOfMonth = moment(startOfMonth.toISOString());
    const endOfMonth = moment(selectedDate.toISOString()).endOf('month');

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
