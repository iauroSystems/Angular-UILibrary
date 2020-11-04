import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMembersProfilePhotosComponent } from './iro-members-profile-photos.component';

describe('IroMembersProfilePhotosComponent', () => {
  let component: IroMembersProfilePhotosComponent;
  let fixture: ComponentFixture<IroMembersProfilePhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMembersProfilePhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMembersProfilePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
