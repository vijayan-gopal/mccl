import { TestBed, inject } from '@angular/core/testing';

import { FetchscheduleService } from './fetchschedule.service';

describe('FetchscheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchscheduleService]
    });
  });

  it('should be created', inject([FetchscheduleService], (service: FetchscheduleService) => {
    expect(service).toBeTruthy();
  }));
});
