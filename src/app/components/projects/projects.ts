import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
  <section id="projects">

<h2>Projects</h2>

<div class="projects-grid">

@for (project of data.projects; track project.title) {

<div class="card">

<h3>{{project.title}}</h3>

<p class="duration">{{project.duration}}</p>

<p>{{project.description}}</p>

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

<a [href]="project.github" target="_blank">
<button>View Code</button>
</a>

</div>

}

</div>

</section>
  `,
  styles: [`
  button{
    background:#2563eb;
    border:none;
    padding:10px 18px;
    border-radius:8px;
    color:white;
    cursor:pointer;
    transition:background 0.2s;
  }
  
  button:hover{
    background:#1d4ed8;
  }
  .projects-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
    gap:30px;
    max-width:1100px;
    margin:auto;
    }
 
  section{
    text-align:center;
  }

  h2{
    font-size:2rem;
    margin-bottom:40px;
  }

  .projects-grid{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:30px;
  }

  .card{
    max-width:350px;
    background:#1e293b;
    border-radius:12px;
    padding:25px;
    box-shadow:0 6px 20px rgba(0,0,0,0.4);
    transition:all 0.3s ease;
  }
  .card:hover{
    transform:translateY(-8px);
    box-shadow:0 14px 30px rgba(0,0,0,0.6);
  }

  .tech{
    margin:15px 0;
  }

  .tech-tag{
    background:#334155;
    padding:6px 12px;
    border-radius:6px;
    margin:4px;
    display:inline-block;
    font-size:0.85rem;
    transition:background 0.2s;
  }
  
  .tech-tag:hover{
    background:#475569;
  }

  `]
})
export class ProjectsComponent {

  data = PORTFOLIO_DATA;

}