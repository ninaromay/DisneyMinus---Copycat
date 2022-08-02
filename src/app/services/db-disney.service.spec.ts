import { TestBed } from '@angular/core/testing';

import { DbDisneyService } from './db-disney.service';

describe('DbDisneyService', () => {
  let service: DbDisneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbDisneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
