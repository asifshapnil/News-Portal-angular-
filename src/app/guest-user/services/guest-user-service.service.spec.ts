import { TestBed } from '@angular/core/testing';

import { GuestUserServiceService } from './guest-user-service.service';

describe('GuestUserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestUserServiceService = TestBed.get(GuestUserServiceService);
    expect(service).toBeTruthy();
  });
});
