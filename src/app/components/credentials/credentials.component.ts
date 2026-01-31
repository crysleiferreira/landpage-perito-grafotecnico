
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Credential } from '../models';

@Component({
  selector: 'app-credentials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="credenciais" class="bg-gray-900 py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          @for (cred of credentials(); track cred.text) {
            <div class="flex items-center justify-center gap-4 fade-in-up" [style.animation-delay]="$index * 150 + 'ms'">
              <i class="fas {{cred.icon}} text-amber-400 text-3xl"></i>
              <span class="text-lg text-gray-300">{{ cred.text }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CredentialsComponent {
  credentials = input.required<Credential[]>();
}
