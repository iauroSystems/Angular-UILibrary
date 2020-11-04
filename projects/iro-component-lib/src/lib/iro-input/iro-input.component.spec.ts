import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroInputComponent } from './iro-input.component';

describe('IroInputComponent', () => {
  let component: IroInputComponent;
  let fixture: ComponentFixture<IroInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
