import { TestBed } from '@angular/core/testing';

import { ErrorAuthService } from './error-auth.service';

describe('ErrorAuthService', () => {
  let service: ErrorAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
