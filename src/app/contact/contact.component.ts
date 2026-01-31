
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contato" class="py-20 bg-gray-900">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-4">Entre em Contato</h2>
        <p class="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">Receba uma consulta confidencial e sem compromisso para o seu caso. A forma mais rápida é via WhatsApp.</p>
        
        <a [href]="whatsappUrl()" target="_blank" class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-transform duration-300 transform hover:scale-105 inline-flex items-center gap-3">
          <i class="fab fa-whatsapp text-2xl"></i>
          Falar com Perito via WhatsApp
        </a>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  whatsappUrl = input.required<string>();
}
