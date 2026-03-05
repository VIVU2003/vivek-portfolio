import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="logo">Vivek</div>

      <div class="links">
        <a (click)="scroll('hero')">Home</a>
        <a (click)="scroll('experience')">Experience</a>
        <a (click)="scroll('skills')">Skills</a>
        <a (click)="scroll('projects')">Projects</a>
        <a (click)="scroll('contact')">Contact</a>
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
      background:#111;
      color:white;
      z-index:1000;
    }

    .links a{
      margin-left:20px;
      cursor:pointer;
    }

    .links a:hover{
      color:#00bcd4;
    }
  `]
})
export class NavbarComponent {

  scroll(section:string){
    const el = document.getElementById(section);
    el?.scrollIntoView({behavior:'smooth'});
  }

}