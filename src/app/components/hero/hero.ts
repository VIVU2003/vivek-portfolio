import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
  <section id="hero" class="hero">
    <h1>{{data.name}}</h1>

    <h2>{{data.title}}</h2>

    <p>{{data.summary}}</p>

    <div class="buttons">
      <button (click)="scrollToExperience()">View Experience</button>

      <a [href]="data.linkedin" target="_blank">
        <button>LinkedIn</button>
      </a>
    </div>
  </section>
  `,
  styles: [`
  .hero{
    padding-top:140px;
    text-align:center;
  }
  
  h1{
    font-size:3.2rem;
    font-weight:700;
  }
  
  h2{
    color:#94a3b8;
    margin:20px 0;
  }
  
  p{
    max-width:700px;
    margin:auto;
    line-height:1.7;
    color:#cbd5f5;
  }
  
  .buttons{
    margin-top:35px;
  }
  
  button{
    margin:10px;
  }
  `]
})
export class HeroComponent {

  data = PORTFOLIO_DATA;

  scrollToExperience(){
    const el = document.getElementById('experience');
    el?.scrollIntoView({behavior:'smooth'});
  }

}