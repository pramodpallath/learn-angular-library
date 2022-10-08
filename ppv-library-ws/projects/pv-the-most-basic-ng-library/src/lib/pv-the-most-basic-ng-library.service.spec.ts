import { TestBed } from '@angular/core/testing';

import { PvTheMostBasicNgLibraryService } from './pv-the-most-basic-ng-library.service';

describe('PvTheMostBasicNgLibraryService', () => {
  let service: PvTheMostBasicNgLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvTheMostBasicNgLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
