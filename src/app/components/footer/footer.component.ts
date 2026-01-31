
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-black py-8">
      <div class="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; 2024 Salatiel Rodrigues - Perícia Grafotécnica. Todos os direitos reservados.</p>
        <div class="mt-4 flex justify-center items-center space-x-6">
          <a [href]="whatsappUrl()" target="_blank" class="hover:text-amber-400 transition-colors flex items-center gap-2"><i class="fab fa-whatsapp"></i> (11) 99999-8888</a>
          <a href="mailto:contato@salatielrodrigues.com" class="hover:text-amber-400 transition-colors flex items-center gap-2"><i class="fas fa-envelope"></i> Email</a>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  whatsappUrl = input.required<string>();
}
