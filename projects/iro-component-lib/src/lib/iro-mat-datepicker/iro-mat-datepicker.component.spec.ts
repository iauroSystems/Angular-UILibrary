import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatDatepickerComponent } from './iro-mat-datepicker.component';

describe('IroMatDatepickerComponent', () => {
  let component: IroMatDatepickerComponent;
  let fixture: ComponentFixture<IroMatDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
