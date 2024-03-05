import { TestBed } from '@angular/core/testing';

import { ModelsColorsService } from './models-colors.service';

describe('ModelsColorsService', () => {
  let service: ModelsColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelsColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
