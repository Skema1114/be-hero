import { TestBed } from '@angular/core/testing';

import { HeroiFavoritoService } from './heroi-favorito.service';

describe('HeroiFavoritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroiFavoritoService = TestBed.get(HeroiFavoritoService);
    expect(service).toBeTruthy();
  });
});
