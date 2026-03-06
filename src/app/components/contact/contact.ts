import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
selector:'app-contact',
standalone:true,

template:`

<section id="contact" class="contact">
  <div class="container">
    <div class="contact-layout">
      <article class="contact-card card">
        <p class="eyebrow">Contact</p>
        <h2 class="section-title">Let's Build Something Useful Together</h2>
        <p class="text">
          I am open to internships, full-time roles, and meaningful collaborations. If you are
          building a product and need help with frontend, full-stack features, or problem-solving,
          I would love to connect.
        </p>

        <div class="links">
          <a [href]="'mailto:'+data.contact.email">
            Email: {{data.contact.email}}
          </a>

          <a [href]="data.contact.linkedin" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
      </article>

      <aside class="details card">
        <h3>Quick Details</h3>
        <p><strong>Location:</strong> {{data.location}}</p>
        <p><strong>Role Focus:</strong> {{data.title}}</p>
        <p><strong>Response Time:</strong> Usually within 24-48 hours</p>
      </aside>
    </div>

    <div class="topics card">
      <h3>You Can Reach Out For</h3>
      <div class="topic-grid">
        @for (topic of topics; track topic) {
          <span class="topic-chip">{{topic}}</span>
        }
      </div>
    </div>

    <div class="cta-row">
      <a class="cta primary" [href]="'mailto:'+data.contact.email">Send an Email</a>
      <a class="cta" [href]="data.contact.linkedin" target="_blank" rel="noopener noreferrer">
        Connect on LinkedIn
      </a>
    </div>
  </div>
</section>

`,

styles:[`

.contact{
  text-align: left;
}

.contact-layout {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 900px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.text{
  color: var(--text-secondary);
  margin: 0 0 26px;
  max-width: 620px;
}

.contact-card {
  margin: 0;
}

.links{
  display:flex;
  justify-content:flex-start;
  gap:12px;
  flex-wrap:wrap;
}

.links a{
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  padding:10px 14px;
  border-radius:8px;
  text-decoration:none;
  color: var(--text-primary);
  transition:border-color 0.2s;
  font-size: 0.92rem;
}

.links a:hover{
  border-color: rgba(37, 99, 235, 0.4);
}

.details h3,
.topics h3 {
  margin: 0 0 12px;
  font-size: 1.05rem;
  color: var(--text-strong);
}

.details p {
  margin: 0 0 10px;
  color: var(--text-secondary);
  font-size: 0.94rem;
}

.details strong {
  color: var(--text-primary);
}

.topics {
  margin-top: 18px;
  max-width: 900px;
}

.topic-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.topic-chip {
  border: 1px solid var(--border-soft);
  background: var(--surface-soft);
  color: var(--text-primary);
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 0.86rem;
}

.cta-row {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 900px;
}

.cta {
  display: inline-block;
  text-decoration: none;
  border: 1px solid var(--border-soft);
  background: var(--surface);
  color: var(--text-primary);
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.92rem;
}

.cta.primary {
  background: var(--brand);
  color: #ffffff;
  border-color: transparent;
}

.cta.primary:hover {
  background: var(--brand-strong);
}

@media (max-width: 640px) {
  .contact {
    text-align: center;
  }

  .contact-card {
    margin: 0 auto;
  }

  .text {
    margin-left: auto;
    margin-right: auto;
  }

  .links {
    justify-content: center;
  }

  .topic-grid,
  .cta-row {
    justify-content: center;
  }
}

`]

})
export class ContactComponent{

data = PORTFOLIO_DATA
topics = [
  'Internships and Full-Time Opportunities',
  'Frontend Development',
  'Full-Stack Feature Development',
  'Project Collaboration',
  'DSA and Problem Solving'
]

}