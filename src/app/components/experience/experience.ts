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
        border-radius:12px;
        background:#1e293b;
        color:#e2e8f0;
        text-align:left;
        box-shadow:0 6px 20px rgba(0,0,0,0.4);
    }
  

    .company{
        font-weight:bold;
        color:#cbd5f5;
      }
      
      .duration{
        color:#94a3b8;
      }
      
      .location{
        color:#64748b;
      }
  `]
})
export class ExperienceComponent{

  data = PORTFOLIO_DATA;

}