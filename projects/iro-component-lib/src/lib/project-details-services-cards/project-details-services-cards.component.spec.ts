import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsServicesCardsComponent } from './project-details-services-cards.component';

describe('ProjectDetailsServicesCardsComponent', () => {
  let component: ProjectDetailsServicesCardsComponent;
  let fixture: ComponentFixture<ProjectDetailsServicesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsServicesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsServicesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
