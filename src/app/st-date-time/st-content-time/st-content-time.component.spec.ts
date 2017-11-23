import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StContentTimeComponent } from './st-content-time.component';

describe('StContentTimeComponent', () => {
  let component: StContentTimeComponent;
  let fixture: ComponentFixture<StContentTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StContentTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StContentTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
