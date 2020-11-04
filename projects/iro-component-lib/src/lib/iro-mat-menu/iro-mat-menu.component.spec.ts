import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatMenuComponent } from './iro-mat-menu.component';

describe('IroMatMenuComponent', () => {
  let component: IroMatMenuComponent;
  let fixture: ComponentFixture<IroMatMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
