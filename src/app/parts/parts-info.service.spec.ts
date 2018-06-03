import { TestBed, inject } from '@angular/core/testing';

import { PartsInfoService } from './parts-info.service';

describe('PartsInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartsInfoService]
    });
  });

  it('should be created', inject([PartsInfoService], (service: PartsInfoService) => {
    expect(service).toBeTruthy();
  }));
});
