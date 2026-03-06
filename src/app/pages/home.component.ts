import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero';
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <app-hero></app-hero>
  `,
  imports:[HeroComponent]
})
export class HomeComponent {}