import { TestBed } from '@angular/core/testing';

import { SummaryProviderService } from './summary-provider.service';

describe('SummaryProviderService', () => {
  let service: SummaryProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummaryProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
