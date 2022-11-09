import { TestBed } from '@angular/core/testing';

import { QuizRequestService } from './quiz-request.service';

describe('QuizRequestService', () => {
  let service: QuizRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
