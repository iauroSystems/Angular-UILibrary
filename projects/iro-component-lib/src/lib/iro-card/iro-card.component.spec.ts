import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroCardComponent } from './iro-card.component';

describe('IroCardComponent', () => {
  let component: IroCardComponent;
  let fixture: ComponentFixture<IroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
