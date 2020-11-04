import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatProgressCircularBarComponent } from './iro-mat-progress-circular-bar.component';

describe('IroMatProgressCircularBarComponent', () => {
  let component: IroMatProgressCircularBarComponent;
  let fixture: ComponentFixture<IroMatProgressCircularBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatProgressCircularBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatProgressCircularBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
