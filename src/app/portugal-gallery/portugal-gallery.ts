import { Component } from '@angular/core';

@Component({
  selector: 'app-portugal-gallery',
  templateUrl: './portugal-gallery.html',
  styleUrl: './portugal-gallery.scss'
})
export class PortugalGallery {
  photos = [
    'IMG_5675.jpg', 'IMG_5676.jpg', 'IMG_5678.jpg', 'IMG_5679.jpg', 'IMG_5680.jpg',
    'IMG_5681.jpg', 'IMG_5682.jpg', 'IMG_5683.jpg', 'IMG_5684.jpg', 'IMG_5685.jpg',
    'IMG_5686.jpg', 'IMG_5715.jpg', 'IMG_5716.jpg', 'IMG_5717.jpg', 'IMG_5718.jpg'
  ];
}
