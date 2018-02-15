import { TestBed, inject } from '@angular/core/testing';

import { ArrivedService } from './arrived.service';

describe('ArrivedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrivedService]
    });
  });

  it('should be created', inject([ArrivedService], (service: ArrivedService) => {
    expect(service).toBeTruthy();
  }));
});
