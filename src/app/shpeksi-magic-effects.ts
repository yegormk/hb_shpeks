import { Injectable } from '@angular/core';
// @ts-ignore
import confetti from 'canvas-confetti';

@Injectable({
  providedIn: 'root'
})
export class ShpeksiMagicEffects {
  private animationFrameId: number | null = null;

  constructor() { }

  customCelebrateConfetti(configuration: any, duration: number, customItem?: any): void {
    if(customItem) {
      const customItemCon = confetti.shapeFromText(customItem);
      configuration.shapes = [customItemCon];
    }

    confetti(configuration);

    setTimeout(() => {
      confetti.reset()
    }, duration);
  }

  emojiTest(textShapes: string[], scalar = 1): void {
    const shapes = textShapes.map(el => confetti.shapeFromText({ text: el, scalar }))

    const defaults = {
      spread: 115,
      ticks: 250,
      gravity: 2,
      shapes: shapes,
      scalar
    };

    function shoot() {
      confetti({
        ...defaults,
        angle: 60,
        origin: { x: 0 },
        particleCount: 60,
        flat: true
      });

      confetti({
        ...defaults,
        particleCount: 20,
        angle: 120,
        origin: { x: 1 },
        flat: true
      });

      confetti({
        ...defaults,
        particleCount: 105,
        scalar: scalar / 2,
        shapes: ['circle']
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }

  snowGenerator(): void {
    let skew = 1;

    const randomInRange = (min: number, max: number): number =>
      Math.random() * (max - min) + min;

    const scalar = randomInRange(0.4, 1);

    const frame = () => {
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: 0,
        origin: {
          x: Math.random(),
          y: Math.random(),
        },
        colors: ['#ffffff'],
        shapes: [confetti.shapeFromText({ text: '⭐️', scalar })],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.9, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      this.animationFrameId = requestAnimationFrame(frame);
    };

    this.animationFrameId = requestAnimationFrame(frame);
  }

  stopAll(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    confetti.reset();
  }
}
