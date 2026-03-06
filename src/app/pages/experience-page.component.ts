import { Component } from '@angular/core';
import { ExperienceComponent } from '../components/experience/experience';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [ExperienceComponent],
  template: `<app-experience></app-experience>`
})
export class ExperiencePageComponent {}
