import { TestBed } from '@angular/core/testing';

import { SitefeedService } from './sitefeed.service';

describe('SitefeedService', () => {
  let service: SitefeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitefeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
