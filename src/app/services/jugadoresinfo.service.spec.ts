import { TestBed } from '@angular/core/testing';

import { JugadoresinfoService } from './jugadoresinfo.service';

describe('JugadoresinfoService', () => {
  let service: JugadoresinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadoresinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
