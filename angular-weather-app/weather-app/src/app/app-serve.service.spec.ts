import { TestBed } from '@angular/core/testing';

import { AppServeService } from './app-serve.service';

describe('AppServeService', () => {
  let service: AppServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
