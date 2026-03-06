import { Component } from '@angular/core';
import { SkillsComponent } from '../components/skills/skills';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [SkillsComponent],
  template: `<app-skills></app-skills>`
})
export class SkillsPageComponent {}
