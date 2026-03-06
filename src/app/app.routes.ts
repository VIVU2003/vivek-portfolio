import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ExperiencePageComponent } from './pages/experience-page.component';
import { SkillsPageComponent } from './pages/skills-page.component';
import { CertificationsPageComponent } from './pages/certifications-page.component';
import { ProjectsPageComponent } from './pages/projects-page.component';
import { ContactPageComponent } from './pages/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experience', component: ExperiencePageComponent },
  { path: 'skills', component: SkillsPageComponent },
  { path: 'certifications', component: CertificationsPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];