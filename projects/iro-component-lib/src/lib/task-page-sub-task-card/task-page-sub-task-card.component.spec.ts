import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPageSubTaskCardComponent } from './task-page-sub-task-card.component';

describe('TaskPageSubTaskCardComponent', () => {
  let component: TaskPageSubTaskCardComponent;
  let fixture: ComponentFixture<TaskPageSubTaskCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPageSubTaskCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPageSubTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
