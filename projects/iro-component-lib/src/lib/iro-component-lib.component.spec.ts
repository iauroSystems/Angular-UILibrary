import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroComponentLibComponent } from './iro-component-lib.component';

describe('IroComponentLibComponent', () => {
  let component: IroComponentLibComponent;
  let fixture: ComponentFixture<IroComponentLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroComponentLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
