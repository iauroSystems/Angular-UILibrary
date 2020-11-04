import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaReportsSummaryTableComponent } from './qa-reports-summary-table.component';

describe('QaReportsSummaryTableComponent', () => {
  let component: QaReportsSummaryTableComponent;
  let fixture: ComponentFixture<QaReportsSummaryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaReportsSummaryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaReportsSummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
