import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatTooltipComponent } from './iro-mat-tooltip.component';

describe('IroMatTooltipComponent', () => {
  let component: IroMatTooltipComponent;
  let fixture: ComponentFixture<IroMatTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
