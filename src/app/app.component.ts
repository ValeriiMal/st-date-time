import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = (new FormBuilder()).group({
      date: [new Date()],
    });
    this.formGroup.valueChanges.subscribe(v => {
      console.log(v);
    });
  }
}
