import { TestBed } from '@angular/core/testing';

import { RedirectOnTokenGuard } from './redirect-on-token.guard';

describe('RedirectOnTokenGuard', () => {
  let guard: RedirectOnTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectOnTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
