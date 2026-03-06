import { Component } from '@angular/core';
import { CertificationsComponent } from '../components/certifications/certifications';

@Component({
  selector: 'app-certifications-page',
  standalone: true,
  imports: [CertificationsComponent],
  template: `<app-certifications></app-certifications>`
})
export class CertificationsPageComponent {}
