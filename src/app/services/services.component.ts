
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="servicos" class="py-20 bg-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-2">Serviços Oferecidos</h2>
        <p class="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Análises técnicas e científicas para garantir a segurança e a autenticidade dos seus documentos.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (service of services(); track service.title; let i = $index) {
            <div class="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-amber-500/20 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-2 fade-in-up" [style.animation-delay]="(i * 100) + 'ms'">
              <div class="text-4xl text-amber-400 mb-4"><i class="fas" [class]="service.icon"></i></div>
              <h3 class="text-2xl font-bold text-white mb-3">{{ service.title }}</h3>
              <p class="text-gray-400">{{ service.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services = input.required<Service[]>();
}
