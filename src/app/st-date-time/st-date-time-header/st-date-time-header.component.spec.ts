import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StDateTimeHeaderComponent } from './st-date-time-header.component';

describe('StDateTimeHeaderComponent', () => {
  let component: StDateTimeHeaderComponent;
  let fixture: ComponentFixture<StDateTimeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StDateTimeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StDateTimeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
