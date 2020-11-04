import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNotesGroupAttachmentTableComponent } from './view-notes-group-attachment-table.component';

describe('ViewNotesGroupAttachmentTableComponent', () => {
  let component: ViewNotesGroupAttachmentTableComponent;
  let fixture: ComponentFixture<ViewNotesGroupAttachmentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNotesGroupAttachmentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNotesGroupAttachmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
