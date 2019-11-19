import { TestBed } from '@angular/core/testing';

import { ObjetosService } from './objetos.service';

describe('ObjetosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjetosService = TestBed.get(ObjetosService);
    expect(service).toBeTruthy();
  });
});
