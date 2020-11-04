import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroTextColorFontSizeComponent } from './iro-text-color-font-size.component';

describe('IroTextColorFontSizeComponent', () => {
  let component: IroTextColorFontSizeComponent;
  let fixture: ComponentFixture<IroTextColorFontSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroTextColorFontSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroTextColorFontSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
