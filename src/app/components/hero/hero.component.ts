
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style="background-image: linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/fundo.png'); background-attachment: fixed;">
      <div class="text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-4 fade-in-up">A Verdade na Ponta da Caneta</h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up" style="animation-delay: 200ms;">
          Perícia Grafotécnica especializada em desvendar a autenticidade de assinaturas e documentos com precisão e rigor técnico.
        </p>
        <a href="#servicos" class="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 inline-block fade-in-up" style="animation-delay: 400ms;">
          Conheça os Serviços
        </a>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
