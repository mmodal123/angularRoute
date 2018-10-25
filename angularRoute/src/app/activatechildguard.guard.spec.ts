import { TestBed, async, inject } from '@angular/core/testing';

import { ActivatechildguardGuard } from './activatechildguard.guard';

describe('ActivatechildguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivatechildguardGuard]
    });
  });

  it('should ...', inject([ActivatechildguardGuard], (guard: ActivatechildguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
