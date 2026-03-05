import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio-data';
import { HeroComponent } from '../components/hero/hero';
import { NavbarComponent } from '../components/navbar/navbar';
import { ExperienceComponent } from '../components/experience/experience';
import { SkillsComponent } from '../components/skills/skills';
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <app-navbar></app-navbar>
  <app-hero></app-hero>
  <app-experience></app-experience>
  <app-skills></app-skills>
  `,
  imports:[HeroComponent,NavbarComponent,ExperienceComponent,SkillsComponent],
  styles: [`
    .hero {
      padding: 80px 20px;
      text-align: center;
    }

    h1 {
      font-size: 2.8rem;
      font-weight: bold;
    }

    h2 {
      color: gray;
      margin-bottom: 20px;
    }

    p {
      max-width: 700px;
      margin: auto;
      line-height: 1.6;
    }
  `]
})
export class HomeComponent {
  data = PORTFOLIO_DATA;
}