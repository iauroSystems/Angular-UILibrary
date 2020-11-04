import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsProjectCardComponent } from './project-details-project-card.component';

describe('ProjectDetailsProjectCardComponent', () => {
  let component: ProjectDetailsProjectCardComponent;
  let fixture: ComponentFixture<ProjectDetailsProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsProjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
