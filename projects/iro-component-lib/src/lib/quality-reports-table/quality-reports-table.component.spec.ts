import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityReportsTableComponent } from './quality-reports-table.component';

describe('QualityReportsTableComponent', () => {
  let component: QualityReportsTableComponent;
  let fixture: ComponentFixture<QualityReportsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityReportsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityReportsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
