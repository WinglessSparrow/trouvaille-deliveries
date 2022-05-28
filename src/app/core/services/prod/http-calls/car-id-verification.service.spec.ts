import { TestBed } from '@angular/core/testing';

import { CarIdVerificationService } from './car-id-verification.service';

describe('CarIdVerificationService', () => {
  let service: CarIdVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarIdVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
