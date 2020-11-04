import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTaskTestcasesTableComponent } from './qa-task-testcases-table.component';

describe('QaTaskTestcasesTableComponent', () => {
  let component: QaTaskTestcasesTableComponent;
  let fixture: ComponentFixture<QaTaskTestcasesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaTaskTestcasesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaTaskTestcasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
