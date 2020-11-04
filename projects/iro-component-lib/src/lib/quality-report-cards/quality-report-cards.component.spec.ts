import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityReportCardsComponent } from './quality-report-cards.component';

describe('QualityReportCardsComponent', () => {
  let component: QualityReportCardsComponent;
  let fixture: ComponentFixture<QualityReportCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityReportCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityReportCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
