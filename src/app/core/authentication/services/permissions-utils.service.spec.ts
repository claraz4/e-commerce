import { TestBed } from '@angular/core/testing';

import { PermissionsUtilsService } from './permissions-utils.service';

describe('PermissionsUtilsService', () => {
  let service: PermissionsUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionsUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
