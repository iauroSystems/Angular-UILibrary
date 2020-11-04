import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroMatProgressBarComponent } from './iro-mat-progress-bar.component';

describe('IroMatProgressBarComponent', () => {
  let component: IroMatProgressBarComponent;
  let fixture: ComponentFixture<IroMatProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroMatProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroMatProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
