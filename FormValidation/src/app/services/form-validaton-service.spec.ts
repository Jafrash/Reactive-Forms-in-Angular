import { TestBed } from '@angular/core/testing';

import { FormValidatonService } from './form-validaton-service';

describe('FormValidatonService', () => {
  let service: FormValidatonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValidatonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
