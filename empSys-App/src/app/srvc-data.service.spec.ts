import { TestBed, inject } from '@angular/core/testing';

import { SrvcDataService } from './srvc-data.service';

describe('SrvcDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrvcDataService]
    });
  });

  it('should be created', inject([SrvcDataService], (service: SrvcDataService) => {
    expect(service).toBeTruthy();
  }));
});
