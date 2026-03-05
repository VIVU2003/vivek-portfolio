import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="logo">Vivek</div>

      <div class="links">
      <a (click)="scroll('projects')">Projects</a>
      <a (click)="scroll('contact')">Contact</a>
        <a (click)="scroll('hero')">Home</a>
        <a (click)="scroll('experience')">Experience</a>
        <a (click)="scroll('skills')">Skills</a>
      </div>
    </nav>
  `,
  styles: [`
  .navbar{
    position:fixed;
    top:0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 40px;
    background:#020617;
    color:white;
    z-index:1000;
    border-bottom:1px solid #1e293b;
  }
  
  .links a{
    margin-left:25px;
    cursor:pointer;
    color:#cbd5f5;
  }
  
  .links a:hover{
    color:#60a5fa;
  }
  `]
})
export class NavbarComponent {

  scroll(section:string){
    const el = document.getElementById(section);
    el?.scrollIntoView({behavior:'smooth'});
  }

}