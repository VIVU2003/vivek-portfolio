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
    padding:120px 20px;
    text-align:center;
  }

  h1{
    font-size:3rem;
    font-weight:bold;
  }

  h2{
    color:gray;
    margin-bottom:20px;
  }

  p{
    max-width:700px;
    margin:auto;
    line-height:1.6;
  }

  .buttons{
    margin-top:30px;
  }

  button{
    padding:12px 20px;
    margin:10px;
    cursor:pointer;
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