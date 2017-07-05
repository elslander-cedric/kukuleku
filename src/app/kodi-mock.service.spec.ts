import { TestBed, inject } from '@angular/core/testing';

import { KodiMockService } from './kodi-mock.service';

describe('KodiMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KodiMockService]
    });
  });

  it('should be created', inject([KodiMockService], (service: KodiMockService) => {
    expect(service).toBeTruthy();
  }));
});
