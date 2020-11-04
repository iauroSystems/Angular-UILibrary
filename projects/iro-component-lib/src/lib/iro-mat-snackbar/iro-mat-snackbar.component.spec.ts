import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatSnackbarComponent } from './iro-mat-snackbar.component';

describe('IroMatSnackbarComponent', () => {
  let component: IroMatSnackbarComponent;
  let fixture: ComponentFixture<IroMatSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
