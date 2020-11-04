import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsProjectManagerCardComponent } from './project-details-project-manager-card.component';

describe('ProjectDetailsProjectManagerCardComponent', () => {
  let component: ProjectDetailsProjectManagerCardComponent;
  let fixture: ComponentFixture<ProjectDetailsProjectManagerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsProjectManagerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsProjectManagerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
