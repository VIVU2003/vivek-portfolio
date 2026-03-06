import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <p class="section-subtitle">
        Selected work that demonstrates my frontend, backend, and problem-solving skills.
      </p>
      <div class="projects-grid">
        @for (project of data.projects; track project.title) {
          <article class="card project-card">
            <h3>{{project.title}}</h3>
            <p class="duration">{{project.duration}}</p>
            <p class="description">{{project.description}}</p>
            <div class="tech">
              @for (tech of project.tech; track tech) {
                <span class="tech-tag">{{tech}}</span>
              }
            </div>
            <ul class="details">
              @for (point of project.details; track point) {
                <li>{{point}}</li>
              }
            </ul>
            <a [href]="project.github" target="_blank" rel="noopener noreferrer">
              <button>View Code</button>
            </a>
          </article>
        }
      </div>
    </div>
  </section>
  `,
  styles: [`
  .projects{
    text-align: left;
  }

  .projects-grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    text-align: left;
  }

  .project-card {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  .duration {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 10px;
  }

  .description {
    color: var(--text-secondary);
    margin-bottom: 14px;
  }

  .tech{
    margin-bottom: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tech-tag{
    background: var(--surface-soft);
    border: 1px solid var(--border-soft);
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 0.8rem;
    color: var(--text-primary);
  }

  .details {
    margin: 0 0 16px;
    padding-left: 18px;
    color: var(--text-secondary);
  }

  li + li {
    margin-top: 6px;
  }

  a {
    margin-top: auto;
    width: fit-content;
  }

  `]
})
export class ProjectsComponent {

  data = PORTFOLIO_DATA;

}