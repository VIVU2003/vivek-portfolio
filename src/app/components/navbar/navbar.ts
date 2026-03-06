import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <button class="theme-toggle" type="button" (click)="toggleTheme()">
      {{ theme === 'dark' ? 'Light' : 'Dark' }}
    </button>

    <nav class="navbar">
      <div class="links">
        <a class="section-btn" routerLink="/" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Home</a>
        <a class="section-btn" routerLink="/experience" routerLinkActive="active">Experience</a>
        <a class="section-btn" routerLink="/skills" routerLinkActive="active">Skills</a>
        <a class="section-btn" routerLink="/certifications" routerLinkActive="active">Certifications</a>
        <a class="section-btn" routerLink="/projects" routerLinkActive="active">Projects</a>
        <a class="section-btn" routerLink="/contact" routerLinkActive="active">Contact</a>
      </div>
    </nav>
  `,
  styles: [`
  .theme-toggle {
    position: fixed;
    top: 14px;
    right: 24px;
    z-index: 1100;
    background: var(--surface);
    color: var(--text-strong);
    border: 1px solid var(--border-soft);
    border-radius: 999px;
    padding: 8px 12px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: var(--shadow-soft);
  }

  .theme-toggle:hover {
    border-color: rgba(37, 99, 235, 0.4);
  }

  .navbar{
    position: fixed;
    right: 24px;
    top: 56%;
    transform: translateY(-50%);
    z-index: 1000;
    background: transparent;
  }
  
  .links a{
    margin-left: 0;
    cursor: pointer;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
    font-size: 1.02rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
  }

  .section-btn {
    min-width: 152px;
    text-align: center;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid var(--border-soft);
    background: var(--surface);
    box-shadow: var(--shadow-soft);
  }
  
  .links a:hover{
    color: var(--text-strong);
    border-color: rgba(37, 99, 235, 0.35);
    background: var(--surface-soft);
  }

  .links a.active {
    color: #ffffff;
    border-color: transparent;
    background: var(--brand);
  }

  @media (max-width: 760px) {
    .theme-toggle {
      top: 10px;
      right: 10px;
      padding: 6px 10px;
      font-size: 0.8rem;
    }

    .navbar {
      position: static;
      transform: none;
      width: min(1120px, calc(100% - 16px));
      margin: 6px auto 2px;
      padding: 0;
    }

    .links {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      justify-content: center;
    }

    .links a {
      margin-left: 0;
      font-size: 0.88rem;
    }

    .section-btn {
      min-width: auto;
      padding: 7px 12px;
      box-shadow: none;
    }
  }
  `]
})
export class NavbarComponent implements OnInit {

  theme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.theme = savedTheme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme = 'dark';
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    localStorage.setItem('portfolio-theme', this.theme);
  }

  private applyTheme(): void {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

}