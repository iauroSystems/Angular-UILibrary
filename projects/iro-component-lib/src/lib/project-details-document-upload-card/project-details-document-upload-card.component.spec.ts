import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsDocumentUploadCardComponent } from './project-details-document-upload-card.component';

describe('ProjectDetailsDocumentUploadCardComponent', () => {
  let component: ProjectDetailsDocumentUploadCardComponent;
  let fixture: ComponentFixture<ProjectDetailsDocumentUploadCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsDocumentUploadCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsDocumentUploadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
