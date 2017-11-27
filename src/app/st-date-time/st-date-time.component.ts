import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  @Output() apply = new EventEmitter();
  public viewType: VIEW_TYPE;
  public VIEW_TYPE = VIEW_TYPE;
  public baseDate: Moment;
  public selectedDate: Moment;

  ngOnInit() {
    this.viewType = VIEW_TYPE.DATE;
    this.selectedDate = moment(new Date());
    this.initSelectedDate();
  }

  private initSelectedDate() {
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
    this.apply.emit({
      date: this.selectedDate.toDate(),
    });
  }

  onDateSelect($event: { date: Moment }) {
    this.selectedDate = moment($event.date);
  }

  onTimeSelect($event: { date: Moment }) {
    this.selectedDate = moment($event.date);
  }
}
