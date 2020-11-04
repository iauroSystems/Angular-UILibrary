import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatTableComponent } from './iro-mat-table.component';

describe('IroMatTableComponent', () => {
  let component: IroMatTableComponent;
  let fixture: ComponentFixture<IroMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
