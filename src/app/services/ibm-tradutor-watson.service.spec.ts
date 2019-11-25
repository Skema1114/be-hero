import { TestBed } from '@angular/core/testing';

import { IbmTradutorWatsonService } from './ibm-tradutor-watson.service';

describe('IbmTradutorWatsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IbmTradutorWatsonService = TestBed.get(IbmTradutorWatsonService);
    expect(service).toBeTruthy();
  });
});
