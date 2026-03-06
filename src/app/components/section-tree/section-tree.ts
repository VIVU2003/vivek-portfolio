import { Component } from '@angular/core';

type SectionNode = {
  id: string;
  label: string;
};

@Component({
  selector: 'app-section-tree',
  standalone: true,
  template: `
  <nav class="section-tree" aria-label="Section quick navigation">
    <div class="line" aria-hidden="true"></div>

    @for (node of nodes; track node.id) {
      <button
        type="button"
        class="dot-wrap"
        [attr.aria-label]="'Go to ' + node.label"
        (click)="scroll(node.id)"
      >
        <span class="dot"></span>
        <span class="label">{{ node.label }}</span>
      </button>
    }
  </nav>
  `,
  styles: [`
  .section-tree {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 950;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px 6px;
  }

  .line {
    position: absolute;
    left: 50%;
    top: 16px;
    bottom: 16px;
    width: 2px;
    transform: translateX(-50%);
    background: var(--border-soft);
    pointer-events: none;
  }

  .dot-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
  }

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 999px;
    background: var(--text-secondary);
    border: 1px solid var(--surface);
    transition: background-color 0.2s ease, transform 0.2s ease;
  }

  .label {
    position: absolute;
    right: 22px;
    white-space: nowrap;
    font-size: 0.78rem;
    color: var(--text-primary);
    background: var(--surface);
    border: 1px solid var(--border-soft);
    border-radius: 6px;
    padding: 4px 8px;
    opacity: 0;
    transform: translateX(6px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;
  }

  .dot-wrap:hover .dot,
  .dot-wrap:focus-visible .dot {
    background: #3b82f6;
    transform: scale(1.15);
  }

  .dot-wrap:hover .label,
  .dot-wrap:focus-visible .label {
    opacity: 1;
    transform: translateX(0);
  }

  .dot-wrap:focus-visible {
    outline: 2px solid rgba(59, 130, 246, 0.5);
    outline-offset: 3px;
    border-radius: 8px;
  }

  @media (max-width: 960px) {
    .section-tree {
      display: none;
    }
  }
  `]
})
export class SectionTreeComponent {
  nodes: SectionNode[] = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  scroll(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
