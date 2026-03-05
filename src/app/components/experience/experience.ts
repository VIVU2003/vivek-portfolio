import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
  <section id="experience" class="experience">

    <h2>Experience</h2>

    @for (exp of data.experience; track exp.company) {

      <div class="card">

        <h3>{{exp.role}}</h3>

        <p class="company">
          {{exp.company}}
        </p>

        <p class="duration">
          {{exp.duration}}
        </p>

        <p class="location">
          {{exp.location}}
        </p>

      </div>

    }

  </section>
  `,
  styles:[`
  .experience{
    padding:80px 20px;
    text-align:center;
  }

  h2{
    font-size:2rem;
    margin-bottom:40px;
  }

  .card{
    max-width:600px;
    margin:20px auto;
    padding:25px;
    border-radius:10px;
    background:#f5f5f5;
    text-align:left;
  }

  .company{
    font-weight:bold;
  }

  .duration{
    color:gray;
  }
  `]
})
export class ExperienceComponent{

  data = PORTFOLIO_DATA;

}