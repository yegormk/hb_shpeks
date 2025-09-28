import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortugalGallery } from './portugal-gallery';

describe('PortugalGallery', () => {
  let component: PortugalGallery;
  let fixture: ComponentFixture<PortugalGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortugalGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortugalGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
