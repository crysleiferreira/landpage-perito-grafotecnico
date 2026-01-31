
import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqItem } from '../models';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="faq" class="py-20 bg-gray-800">
      <div class="container mx-auto px-6 max-w-3xl">
        <h2 class="text-4xl font-bold text-white mb-8 text-center">Perguntas Frequentes</h2>
        <div class="space-y-4">
          @for (faq of faqs(); track $index) {
            <div class="bg-gray-900 rounded-lg border border-gray-700">
              <button (click)="onToggle($index)" class="w-full flex justify-between items-center text-left p-6 transition-colors hover:bg-gray-800">
                <span class="text-lg font-semibold text-white">{{ faq.question }}</span>
                <span class="text-amber-400 transform transition-transform duration-300" [class.rotate-45]="faq.isOpen">
                  <i class="fas fa-plus"></i>
                </span>
              </button>
              @if (faq.isOpen) {
                <div class="px-6 pb-6 text-gray-300">
                  <p>{{ faq.answer }}</p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  faqs = input.required<FaqItem[]>();
  toggleFaqEvent = output<number>();

  onToggle(index: number) {
    this.toggleFaqEvent.emit(index);
  }
}
