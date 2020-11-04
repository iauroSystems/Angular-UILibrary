import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsPageAllReportsComponent } from './project-details-page-all-reports.component';

describe('ProjectDetailsPageAllReportsComponent', () => {
  let component: ProjectDetailsPageAllReportsComponent;
  let fixture: ComponentFixture<ProjectDetailsPageAllReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsPageAllReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsPageAllReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
