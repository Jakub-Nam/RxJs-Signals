import { TestBed } from '@angular/core/testing';

import { MockMusicService } from './mock-music.service';

describe('MockMusicService', () => {
  let service: MockMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
