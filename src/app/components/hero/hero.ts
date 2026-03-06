import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
  <section id="hero" class="hero">
    <div class="container hero-grid">
      <div class="hero-content">
        <p class="label">Developer Portfolio</p>
        <h1>Hey, I'm {{data.name}}.</h1>
        <h2>{{data.title}}</h2>
        <p class="summary">{{data.summary}}</p>
        <div class="buttons">
          <a class="primary-action" routerLink="/experience">View Experience</a>
          <a class="btn-link" [href]="data.linkedin" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a class="btn-link ghost" [href]="'mailto:'+data.email">
            Email Me
          </a>
        </div>
        <p class="location">{{data.location}}</p>
      </div>

      <aside class="hero-side card">
        <h3>Currently</h3>
        <div class="stats">
          <div class="stat">
            <strong>{{data.projects.length}}+</strong>
            <span>Projects</span>
          </div>
          <div class="stat">
            <strong>{{data.skills.length}}+</strong>
            <span>Skills</span>
          </div>
          <div class="stat">
            <strong>{{data.certifications.length}}</strong>
            <span>Certifications</span>
          </div>
        </div>

        <p class="side-title">Core Focus</p>
        <div class="stack-tags">
          @for (skill of topSkills; track skill) {
            <span>{{skill}}</span>
          }
        </div>
      </aside>
    </div>
  </section>
  `,
  styles: [`
  .hero{
    padding-top: 42px;
    padding-bottom: 110px;
  }

  .hero-grid {
    display: block;
    max-width: 760px;
  }

  .hero-content {
    text-align: left;
  }

  .label {
    display: inline-block;
    margin-bottom: 14px;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 0.8rem;
    color: var(--text-secondary);
    border: 1px solid var(--border-soft);
    background: var(--surface);
  }
  
  h1{
    font-size: clamp(2.45rem, 6vw, 4.4rem);
    font-weight: 800;
    line-height: 1.03;
    margin-bottom: 12px;
    color: var(--text-strong);
    letter-spacing: -0.03em;
  }
  
  h2{
    color: var(--text-primary);
    margin:0 0 18px;
    font-weight: 600;
    max-width: 860px;
    font-size: clamp(1rem, 2.1vw, 1.18rem);
  }
  
  .summary{
    max-width: 760px;
    line-height:1.7;
    color: var(--text-secondary);
  }
  
  .buttons{
    margin-top: 28px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .primary-action {
    text-decoration: none;
    background: var(--brand);
    color: #fff;
    font-weight: 600;
    padding: 10px 17px;
    border-radius: 8px;
    transition: background-color 0.2s ease;
  }

  .primary-action:hover {
    background: var(--brand-strong);
  }

  .btn-link {
    text-decoration: none;
    color: var(--text-strong);
    font-weight: 600;
    padding: 11px 16px;
    border-radius: 8px;
    border: 1px solid var(--border-soft);
    background: var(--surface);
    transition: border-color 0.2s ease, background-color 0.2s ease;
  }

  .btn-link:hover {
    border-color: rgba(37, 99, 235, 0.35);
    background: var(--surface-soft);
  }

  .ghost {
    color: var(--text-primary);
  }

  .location {
    margin-top: 20px;
    color: var(--text-muted);
    font-size: 0.95rem;
  }

  .hero-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    margin-top: 34px;
    max-width: 380px;
  }

  .hero-side h3 {
    margin: 0;
    font-size: 1.05rem;
    color: var(--text-strong);
  }

  .stats {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stat {
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    padding: 12px 14px;
    background: var(--surface-soft);
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat strong {
    display: inline-block;
    font-size: 1.05rem;
    color: var(--text-strong);
  }

  .stat span {
    font-size: 0.88rem;
    color: var(--text-muted);
  }

  .side-title {
    margin: 0;
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.92rem;

  }

  .stack-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .stack-tags span {
    font-size: 0.8rem;
    color: var(--text-primary);
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid var(--border-soft);
    background: var(--surface-soft);
  }

  @media (max-width: 640px) {
    .hero {
      padding-top: 28px;
      padding-bottom: 84px;
    }

    .hero-content {
      text-align: center;
    }

    h2,
    .summary {
      margin-left: auto;
      margin-right: auto;
    }

    .buttons {
      justify-content: center;
    }

    .location {
      text-align: center;
    }

    .hero-side {
      max-width: 100%;
    }
  }
  `]
})
export class HeroComponent {

  data = PORTFOLIO_DATA;
  topSkills = PORTFOLIO_DATA.skills.slice(0, 11);
}