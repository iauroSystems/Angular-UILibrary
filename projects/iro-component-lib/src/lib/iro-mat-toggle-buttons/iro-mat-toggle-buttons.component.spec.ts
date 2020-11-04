import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatToggleButtonsComponent } from './iro-mat-toggle-buttons.component';

describe('IroMatToggleButtonsComponent', () => {
  let component: IroMatToggleButtonsComponent;
  let fixture: ComponentFixture<IroMatToggleButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatToggleButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatToggleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
