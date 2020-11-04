import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseManagementTableComponent } from './release-management-table.component';

describe('ReleaseManagementTableComponent', () => {
  let component: ReleaseManagementTableComponent;
  let fixture: ComponentFixture<ReleaseManagementTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseManagementTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
