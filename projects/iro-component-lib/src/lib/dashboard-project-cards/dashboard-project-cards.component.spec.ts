import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProjectCardsComponent } from './dashboard-project-cards.component';

describe('DashboardProjectCardsComponent', () => {
  let component: DashboardProjectCardsComponent;
  let fixture: ComponentFixture<DashboardProjectCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProjectCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProjectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
