import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroDropdownButtonComponent } from './iro-dropdown-button.component';

describe('IroDropdownButtonComponent', () => {
  let component: IroDropdownButtonComponent;
  let fixture: ComponentFixture<IroDropdownButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroDropdownButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
