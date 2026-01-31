
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold text-white tracking-wider" style="font-family: 'Playfair Display', serif;">
          <i class="fas fa-feather-alt text-amber-400 mr-2"></i>SALATIEL R. FERREIRA
        </div>
        <nav class="hidden md:flex items-center space-x-6">
            <a href="#sobre" class="text-gray-300 hover:text-amber-400 transition-colors">Sobre</a>
            <a href="#servicos" class="text-gray-300 hover:text-amber-400 transition-colors">Serviços</a>
            <a href="#depoimentos" class="text-gray-300 hover:text-amber-400 transition-colors">Depoimentos</a>
            <a [href]="whatsappUrl()" target="_blank" class="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-5 rounded-full transition-colors duration-300">
              Fale via WhatsApp
            </a>
        </nav>
        <a [href]="whatsappUrl()" target="_blank" class="md:hidden bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          <i class="fab fa-whatsapp"></i> Contato
        </a>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  whatsappUrl = input.required<string>();
}
