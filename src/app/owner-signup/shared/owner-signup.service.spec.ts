import { TestBed, inject } from '@angular/core/testing';

import { OwnerSignupService } from './owner-signup.service';

describe('OwnerSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnerSignupService]
    });
  });

  it('should be created', inject([OwnerSignupService], (service: OwnerSignupService) => {
    expect(service).toBeTruthy();
  }));
});
