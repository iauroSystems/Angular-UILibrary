import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatTabsComponent } from './iro-mat-tabs.component';

describe('IroMatTabsComponent', () => {
  let component: IroMatTabsComponent;
  let fixture: ComponentFixture<IroMatTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
