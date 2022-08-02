import { TestBed } from '@angular/core/testing';

import { DisneyBbddService } from './disney-bbdd.service';

describe('DisneyBbddService', () => {
  let service: DisneyBbddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisneyBbddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
