import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
  <section id="skills" class="skills">

    <h2>Skills</h2>

    <div class="skills-grid">

      @for (skill of data.skills; track skill) {

        <div class="skill">
          {{skill}}
        </div>

      }

    </div>

  </section>
  `,
  styles:[`
  .skills{
    padding:80px 20px;
    text-align:center;
  }

  .skills-grid{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:15px;
    max-width:800px;
    margin:auto;
  }

  .skill{
    padding:10px 20px;
    background:#eee;
    border-radius:20px;
  }
  `]
})
export class SkillsComponent{

  data = PORTFOLIO_DATA;

}