import { TestBed } from '@angular/core/testing';

import { PopularThisMonthService } from './popular-this-month.service';

describe('PopularThisMonthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopularThisMonthService = TestBed.get(PopularThisMonthService);
    expect(service).toBeTruthy();
  });
});
