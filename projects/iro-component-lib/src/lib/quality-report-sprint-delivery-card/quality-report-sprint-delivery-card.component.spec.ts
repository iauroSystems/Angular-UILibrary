import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityReportSprintDeliveryCardComponent } from './quality-report-sprint-delivery-card.component';

describe('QualityReportSprintDeliveryCardComponent', () => {
  let component: QualityReportSprintDeliveryCardComponent;
  let fixture: ComponentFixture<QualityReportSprintDeliveryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityReportSprintDeliveryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityReportSprintDeliveryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
