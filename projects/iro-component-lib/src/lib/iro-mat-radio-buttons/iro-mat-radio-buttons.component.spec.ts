import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatRadioButtonsComponent } from './iro-mat-radio-buttons.component';

describe('IroMatRadioButtonsComponent', () => {
  let component: IroMatRadioButtonsComponent;
  let fixture: ComponentFixture<IroMatRadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatRadioButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
