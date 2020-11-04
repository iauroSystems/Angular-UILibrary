import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSummaryTableComponent } from './tasks-summary-table.component';

describe('TasksSummaryTableComponent', () => {
  let component: TasksSummaryTableComponent;
  let fixture: ComponentFixture<TasksSummaryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksSummaryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
