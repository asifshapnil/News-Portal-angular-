import { TestBed } from '@angular/core/testing';

import { PopularPostService } from './popular-post.service';

describe('PopularPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopularPostService = TestBed.get(PopularPostService);
    expect(service).toBeTruthy();
  });
});
