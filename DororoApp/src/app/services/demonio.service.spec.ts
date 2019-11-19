import { TestBed } from '@angular/core/testing';

import { DemonioService } from './demonio.service';

describe('DemonioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemonioService = TestBed.get(DemonioService);
    expect(service).toBeTruthy();
  });
});
