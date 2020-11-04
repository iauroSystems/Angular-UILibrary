import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPageNumberCardComponent } from './task-page-number-card.component';

describe('TaskPageNumberCardComponent', () => {
  let component: TaskPageNumberCardComponent;
  let fixture: ComponentFixture<TaskPageNumberCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPageNumberCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPageNumberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
