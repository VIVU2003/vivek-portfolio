import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
  <section id="experience" class="experience">
    <div class="container">
      <h2 class="section-title">Experience</h2>
      <p class="section-subtitle">
        Roles and communities where I worked, learned, and contributed.
      </p>
      <div class="timeline">
        @for (exp of data.experience; track exp.company) {
          <div class="card experience-card">
            <h3>{{exp.role}}</h3>
            <p class="company">{{exp.company}}</p>
            <p class="duration">{{exp.duration}}</p>
            <p class="location">{{exp.location}}</p>
          </div>
        }
      </div>
    </div>
  </section>
  `,
  styles:[`
  .experience{
    text-align: left;
  }

  .timeline {
    display: grid;
    gap: 18px;
    max-width: 900px;
    margin: 0;
  }

  .experience-card {
    text-align: left;
    border-left: 3px solid rgba(37, 99, 235, 0.45);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  
  .company{
    font-weight:700;
    color: var(--text-primary);
    margin-bottom: 6px;
  }
      
  .duration{
    color: var(--text-secondary);
    margin-bottom: 4px;
  }
      
  .location{
    color: var(--text-muted);
  }
  .section-subtitle{
    color: var(--text-secondary);
    margin: 0 0 30px;
    max-width: 620px;
  }
  `]
})
export class ExperienceComponent{

  data = PORTFOLIO_DATA;

}