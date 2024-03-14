import { TestBed } from '@angular/core/testing';

import { GreengrocerService } from './greengrocer.service';

describe('GreengrocerService', () => {
  let service: GreengrocerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreengrocerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
