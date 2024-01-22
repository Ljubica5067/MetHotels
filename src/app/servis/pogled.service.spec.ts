import { TestBed } from '@angular/core/testing';

import { PogledService } from './pogled.service';

describe('PogledService', () => {
  let service: PogledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PogledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
