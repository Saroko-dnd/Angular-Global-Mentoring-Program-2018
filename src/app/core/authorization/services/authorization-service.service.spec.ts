import { TestBed } from '@angular/core/testing';

import { AuthorizationServiceService } from './authorization-service.service';

describe('AuthorizationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorizationServiceService = TestBed.get(AuthorizationServiceService);
    expect(service).toBeTruthy();
  });
});
