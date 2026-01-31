
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  template: `
    <section id="processo" class="py-20 bg-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-12">Como Funciona o Processo</h2>
        <div class="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-4">
          <div class="flex flex-col items-center w-full md:w-1/4 relative fade-in-up">
            <div class="bg-amber-500 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold border-4 border-gray-700">1</div>
            <h3 class="text-xl font-semibold text-white mt-4 mb-2">Contato Inicial</h3>
            <p class="text-gray-400">Você entra em contato, apresenta o caso e envia os documentos para uma análise preliminar.</p>
          </div>
          <div class="hidden md:block w-16 h-1 bg-gray-700 mt-8"></div>
          <div class="flex flex-col items-center w-full md:w-1/4 fade-in-up" style="animation-delay: 200ms;">
             <div class="bg-amber-500 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold border-4 border-gray-700">2</div>
            <h3 class="text-xl font-semibold text-white mt-4 mb-2">Análise Técnica</h3>
            <p class="text-gray-400">Realizo um exame minucioso dos documentos utilizando equipamentos e técnicas especializadas.</p>
          </div>
          <div class="hidden md:block w-16 h-1 bg-gray-700 mt-8"></div>
          <div class="flex flex-col items-center w-full md:w-1/4 fade-in-up" style="animation-delay: 400ms;">
             <div class="bg-amber-500 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold border-4 border-gray-700">3</div>
            <h3 class="text-xl font-semibold text-white mt-4 mb-2">Elaboração do Laudo</h3>
            <p class="text-gray-400">Desenvolvo um laudo pericial detalhado, com fundamentação técnica e ilustrações claras.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent {}
