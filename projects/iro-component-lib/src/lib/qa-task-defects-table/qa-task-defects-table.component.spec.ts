import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTaskDefectsTableComponent } from './qa-task-defects-table.component';

describe('QaTaskDefectsTableComponent', () => {
  let component: QaTaskDefectsTableComponent;
  let fixture: ComponentFixture<QaTaskDefectsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaTaskDefectsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaTaskDefectsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
