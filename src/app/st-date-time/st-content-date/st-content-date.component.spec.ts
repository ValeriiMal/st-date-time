import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StContentDateComponent } from './st-content-date.component';

describe('StContentDateComponent', () => {
  let component: StContentDateComponent;
  let fixture: ComponentFixture<StContentDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StContentDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StContentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
