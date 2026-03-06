import { Component } from '@angular/core';
import { ProjectsComponent } from '../components/projects/projects';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectsComponent],
  template: `<app-projects></app-projects>`
})
export class ProjectsPageComponent {}
