import { TestBed } from '@angular/core/testing';

import { SanityService } from './services/sanity.service';

describe('SanityService', () => {
  let service: SanityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
