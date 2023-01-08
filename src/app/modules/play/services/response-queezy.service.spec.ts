import { TestBed } from '@angular/core/testing';

import { ResponseQueezyService } from './response-queezy.service';

describe('ResponseQueezyService', () => {
  let service: ResponseQueezyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseQueezyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
