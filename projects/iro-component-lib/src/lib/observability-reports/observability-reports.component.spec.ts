import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservabilityReportsComponent } from './observability-reports.component';

describe('ObservabilityReportsComponent', () => {
  let component: ObservabilityReportsComponent;
  let fixture: ComponentFixture<ObservabilityReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservabilityReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservabilityReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
