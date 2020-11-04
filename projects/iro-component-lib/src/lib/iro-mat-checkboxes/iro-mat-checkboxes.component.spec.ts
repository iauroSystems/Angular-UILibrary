import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatCheckboxesComponent } from './iro-mat-checkboxes.component';

describe('IroMatCheckboxesComponent', () => {
  let component: IroMatCheckboxesComponent;
  let fixture: ComponentFixture<IroMatCheckboxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatCheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
