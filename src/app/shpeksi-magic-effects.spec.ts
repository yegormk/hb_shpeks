import { TestBed } from '@angular/core/testing';

import { ShpeksiMagicEffects } from './shpeksi-magic-effects';

describe('ShpeksiMagicEffects', () => {
  let service: ShpeksiMagicEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShpeksiMagicEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
