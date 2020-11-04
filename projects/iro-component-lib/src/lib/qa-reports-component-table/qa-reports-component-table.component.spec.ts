import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaReportsComponentTableComponent } from './qa-reports-component-table.component';

describe('QaReportsComponentTableComponent', () => {
  let component: QaReportsComponentTableComponent;
  let fixture: ComponentFixture<QaReportsComponentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaReportsComponentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaReportsComponentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
