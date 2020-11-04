import { TestBed } from '@angular/core/testing';

import { IroComponentLibService } from './iro-component-lib.service';

describe('IroComponentLibService', () => {
  let service: IroComponentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IroComponentLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
