import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatMultiSelectComponent } from './iro-mat-multi-select.component';

describe('IroMatMultiSelectComponent', () => {
  let component: IroMatMultiSelectComponent;
  let fixture: ComponentFixture<IroMatMultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatMultiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
