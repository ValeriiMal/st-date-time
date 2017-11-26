import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
  selector: 'app-st-date-time-header',
  templateUrl: './st-date-time-header.component.html',
  styleUrls: ['./st-date-time-header.component.scss']
})
export class StDateTimeHeaderComponent implements OnInit {
  @Input() set date(value: Moment) {
    this.formattedDate = moment(value).format('ll');
  }
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();

  public formattedDate;

  constructor() { }

  ngOnInit() {
  }

  onPrev() {
    this.prev.emit();
  }

  onNext() {
    this.next.emit();
  }

}
