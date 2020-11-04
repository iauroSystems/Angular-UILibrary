import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatDialogPopupComponent } from './iro-mat-dialog-popup.component';

describe('IroMatDialogPopupComponent', () => {
  let component: IroMatDialogPopupComponent;
  let fixture: ComponentFixture<IroMatDialogPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatDialogPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatDialogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
