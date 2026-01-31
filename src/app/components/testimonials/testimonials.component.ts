
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '../models';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="depoimentos" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">O que dizem os Clientes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (testimonial of testimonials(); track $index) {
            <div class="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 fade-in-up" [style.animation-delay]="$index * 150 + 'ms'">
              <i class="fas fa-quote-left text-amber-400 text-3xl mb-4"></i>
              <p class="text-gray-300 italic mb-6">"{{ testimonial.quote }}"</p>
              <div class="text-right">
                <p class="font-bold text-white">{{ testimonial.author }}</p>
                <p class="text-sm text-gray-400">{{ testimonial.role }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  testimonials = input.required<Testimonial[]>();
}
