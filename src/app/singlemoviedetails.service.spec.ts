import { TestBed } from '@angular/core/testing';

import { SinglemoviedetailsService } from './singlemoviedetails.service';

describe('SinglemoviedetailsService', () => {
  let service: SinglemoviedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglemoviedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
