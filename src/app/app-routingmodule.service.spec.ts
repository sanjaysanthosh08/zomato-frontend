import { TestBed } from '@angular/core/testing';

import { AppRoutingmoduleService } from './app-routingmodule.service';

describe('AppRoutingmoduleService', () => {
  let service: AppRoutingmoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRoutingmoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
