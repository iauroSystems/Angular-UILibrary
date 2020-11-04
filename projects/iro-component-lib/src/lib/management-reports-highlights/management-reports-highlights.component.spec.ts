import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementReportsHighlightsComponent } from './management-reports-highlights.component';

describe('ManagementReportsHighlightsComponent', () => {
  let component: ManagementReportsHighlightsComponent;
  let fixture: ComponentFixture<ManagementReportsHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementReportsHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementReportsHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
