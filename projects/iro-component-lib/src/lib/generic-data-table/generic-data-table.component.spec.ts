import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDataTableComponent } from './generic-data-table.component';

describe('GenericDataTableComponent', () => {
  let component: GenericDataTableComponent;
  let fixture: ComponentFixture<GenericDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
