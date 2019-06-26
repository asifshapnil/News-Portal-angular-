import { TestBed } from '@angular/core/testing';

import { PostMediaService } from './post-media.service';

describe('PostMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostMediaService = TestBed.get(PostMediaService);
    expect(service).toBeTruthy();
  });
});
