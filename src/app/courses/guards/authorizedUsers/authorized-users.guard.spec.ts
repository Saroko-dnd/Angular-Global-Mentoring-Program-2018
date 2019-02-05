import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorizedUsersGuard } from './authorized-users.guard';

describe('AuthorizedUsersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizedUsersGuard]
    });
  });

  it('should ...', inject([AuthorizedUsersGuard], (guard: AuthorizedUsersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
