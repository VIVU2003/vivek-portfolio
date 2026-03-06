import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <p class="section-subtitle">
        Technologies and concepts I use to build projects end-to-end.
      </p>
      <div class="skills-tree">
        @for (skill of data.skills; track skill; let i = $index) {
          <div class="skill-item" [class.right]="i % 2 !== 0">
            <span class="skill-dot" aria-hidden="true"></span>
            <div class="skill">{{skill}}</div>
          </div>
        }
      </div>
    </div>
  </section>
  `,
  styles:[`
  .skills{
    text-align: left;
  }

  .skills-tree {
    position: relative;
    max-width: 860px;
    margin: 8px 0 0;
    padding: 8px 0;
  }

  .skills-tree::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--border-soft);
    transform: translateX(-50%);
  }

  .skill-item {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding: 9px 24px 9px 0;
    position: relative;
  }

  .skill-item.right {
    margin-left: 50%;
    justify-content: flex-start;
    padding: 9px 0 9px 24px;
  }

  .skill-dot {
    position: absolute;
    top: 50%;
    right: -6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translateY(-50%);
    background: var(--brand);
    border: 2px solid var(--surface);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.18);
  }

  .skill-item.right .skill-dot {
    left: -6px;
    right: auto;
  }

  .skill{
    padding: 9px 14px;
    background: var(--surface);
    color: var(--text-primary);
    border-radius: 8px;
    font-size: 0.9rem;
    border: 1px solid var(--border-soft);
    transition: border-color 0.2s ease;
    min-width: 140px;
    text-align: center;
  }
  
  .skill:hover{
    border-color: rgba(37, 99, 235, 0.35);
  }
  .section-subtitle{
    color: var(--text-secondary);
    margin: 0 0 26px;
    max-width: 620px;
  }

  @media (max-width: 640px) {
    .skills {
      text-align: center;
    }

    .skills-tree {
      max-width: 460px;
      margin: 8px auto 0;
    }

    .skills-tree::before {
      left: 12px;
      transform: none;
    }

    .skill-item,
    .skill-item.right {
      width: 100%;
      margin-left: 0;
      justify-content: flex-start;
      padding: 8px 0 8px 30px;
    }

    .skill-dot,
    .skill-item.right .skill-dot {
      left: 7px;
      right: auto;
    }
  }
  `]
})
export class SkillsComponent{

  data = PORTFOLIO_DATA;

}