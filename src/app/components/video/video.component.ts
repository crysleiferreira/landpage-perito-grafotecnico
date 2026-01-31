
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="video" class="py-20" style="background-color: #111827; background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4='); background-attachment: fixed;">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-4">Entenda a Perícia Grafotécnica</h2>
        <p class="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">Assista ao vídeo e descubra como a análise da escrita pode ser fundamental para a resolução de conflitos.</p>
        <div class="relative max-w-4xl mx-auto shadow-2xl" style="padding-top: 56.25%;"> <!-- 16:9 Aspect Ratio -->
          <iframe class="absolute top-0 left-0 w-full h-full rounded-lg" [src]="videoUrl()" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent {
  videoUrl = input.required<SafeResourceUrl>();
}
