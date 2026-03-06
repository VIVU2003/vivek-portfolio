import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  template: `
  <section id="certifications" class="certifications">
    <div class="container">
      <h2 class="section-title">Certifications</h2>
      <p class="section-subtitle">
        Certifications and badges that reflect my learning in AI, development, and industry tools.
      </p>

      <div class="cert-grid">
        @for (cert of data.certifications; track cert.title) {
          <article class="card cert-card">
            <h3>{{ cert.title }}</h3>
            <p class="meta">{{ cert.issuer }} <span class="dot">•</span> {{ cert.date }}</p>

            @if (cert.skills?.length) {
              <div class="skills">
                @for (skill of cert.skills; track skill) {
                  <span class="chip">{{ skill }}</span>
                }
              </div>
            }

            @if (cert.credential) {
              <p class="credential">
                Credential ID: <span>{{ cert.credential }}</span>
              </p>
            }
          </article>
        }
      </div>
    </div>
  </section>
  `,
  styles: [`
  .certifications {
    text-align: left;
  }

  .cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 18px;
    text-align: left;
  }

  .cert-card h3 {
    font-size: 1.08rem;
    margin-bottom: 8px;
    color: var(--text-strong);
  }

  .meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 12px;
  }

  .dot {
    color: var(--text-muted);
    margin: 0 5px;
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;
  }

  .chip {
    font-size: 0.8rem;
    color: var(--text-primary);
    padding: 5px 10px;
    border-radius: 999px;
    border: 1px solid var(--border-soft);
    background: var(--surface-soft);
  }

  .credential {
    color: var(--text-secondary);
    font-size: 0.85rem;
  }

  .credential span {
    color: var(--text-primary);
    word-break: break-word;
  }

  @media (max-width: 640px) {
    .certifications {
      text-align: center;
    }
  }
  `]
})
export class CertificationsComponent {
  data = PORTFOLIO_DATA;
}
