import { Component } from '@angular/core';
import { ContactComponent } from '../components/contact/contact';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent],
  template: `<app-contact></app-contact>`
})
export class ContactPageComponent {}
