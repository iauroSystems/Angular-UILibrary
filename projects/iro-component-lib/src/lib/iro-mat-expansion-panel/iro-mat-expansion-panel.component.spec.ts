import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatExpansionPanelComponent } from './iro-mat-expansion-panel.component';

describe('IroMatExpansionPanelComponent', () => {
  let component: IroMatExpansionPanelComponent;
  let fixture: ComponentFixture<IroMatExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
