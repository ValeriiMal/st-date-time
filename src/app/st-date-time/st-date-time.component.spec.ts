import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StDateTimeComponent } from './st-date-time.component';

describe('DateTimeComponent', () => {
  let component: StDateTimeComponent;
  let fixture: ComponentFixture<StDateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StDateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
