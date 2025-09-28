import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ShpeksiMagicEffects } from './shpeksi-magic-effects';
import {MatButton} from '@angular/material/button';
import { PortugalGallery } from './portugal-gallery/portugal-gallery';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton, PortugalGallery],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('hb_shpeksik_tsom');
  public heartShown = true;
  public wishesShown = false;
  public galleryShown = false;

  constructor(private shpeksiMagicEffects: ShpeksiMagicEffects) { }

  ngOnInit(): void {
    this.shpeksiMagicEffects.snowGenerator();
  }

  goToWishes(): void {
    this.shpeksiMagicEffects.emojiTest(['❤']);
    this.heartShown = false;
    this.wishesShown = true;
    this.galleryShown = false;
  }

  goToHeart(): void {
    this.heartShown = true;
    this.wishesShown = false;
    this.galleryShown = false;
  }

  goToGallery(): void {
    this.heartShown = false;
    this.wishesShown = false;
    this.galleryShown = true;
  }
}
