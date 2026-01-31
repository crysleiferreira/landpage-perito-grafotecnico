
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CredentialsComponent } from './components/credentials/credentials.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { Service, Testimonial, FaqItem } from './components/models';
import { ProcessComponent } from './components/process/process.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { VideoComponent } from './components/video/video.component';
import { Credential } from './components/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    CredentialsComponent,
    ServicesComponent,
    VideoComponent,
    ProcessComponent,
    TestimonialsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
  ]
})
export class AppComponent {
  private sanitizer = inject(DomSanitizer);

  readonly whatsappUrl = 'https://wa.me/5563984938159?text=Olá,%20Salatiel!%20Gostaria%20de%20solicitar%20uma%20análise%20grafotécnica.';
  readonly youtubeVideoId = 'o-1544aUTVA'; // Placeholder video about graphology
  readonly videoUrl: SafeResourceUrl;

  constructor() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.youtubeVideoId}`);
  }

  services = signal<Service[]>([
    {
      icon: 'fa-signature',
      title: 'Análise de Assinaturas',
      description: 'Verificação de autenticidade de assinaturas em contratos, cheques, e outros documentos importantes.'
    },
    {
      icon: 'fa-file-contract',
      title: 'Exame de Documentos',
      description: 'Detecção de adulterações, rasuras, e outras fraudes em documentos manuscritos ou impressos.'
    },
    {
      icon: 'fa-stamp',
      title: 'Identificação de Falsificações',
      description: 'Análise detalhada para identificar falsificações de escrita em testamentos, procurações e mais.'
    },
    {
      icon: 'fa-balance-scale',
      title: 'Laudos Técnicos Judiciais',
      description: 'Elaboração de laudos periciais completos e pareceres técnicos para processos judiciais e extrajudiciais.'
    },
    {
      icon: 'fa-magnifying-glass',
      title: 'Análise de Grafismos',
      description: 'Estudo aprofundado de todos os elementos da escrita para determinação de autoria e autenticidade.'
    },
    {
      icon: 'fa-user-shield',
      title: 'Consultoria Preventiva',
      description: 'Orientação para empresas e pessoas físicas sobre como proteger documentos e evitar fraudes.'
    }
  ]);
  
  credentials = signal<Credential[]>([
    { icon: 'fa-award', text: 'Membro do CONPEJ' },
    { icon: 'fa-gavel', text: 'Credenciado no TJSP' },
    { icon: 'fa-certificate', text: 'Pós-graduado em Perícia Criminal' }
  ]);

  testimonials = signal<Testimonial[]>([
    {
      quote: 'O laudo do Dr. Salatiel foi decisivo para o nosso caso. A clareza e o embasamento técnico foram impecáveis.',
      author: 'Dr. Carlos Mendes',
      role: 'Advogado Cível'
    },
    {
      quote: 'Contratamos a perícia para uma auditoria interna e o resultado nos deu a segurança que precisávamos. Serviço rápido e extremamente profissional.',
      author: 'Ana Paula Costa',
      role: 'Diretora Financeira, Empresa XYZ'
    },
    {
      quote: 'Tinha uma grande dúvida sobre a autenticidade de um contrato familiar. A análise do perito Salatiel trouxe a verdade à tona e resolveu a questão.',
      author: 'Roberto Lima',
      role: 'Cliente Particular'
    }
  ]);

  faqs = signal<FaqItem[]>([
    {
      question: 'O que é a perícia grafotécnica?',
      answer: 'É a área da criminalística que analisa a escrita para determinar sua autenticidade e autoria. É usada para verificar se uma assinatura é falsa, se um documento foi alterado, etc.',
      isOpen: false
    },
    {
      question: 'Quando devo contratar um perito grafotécnico?',
      answer: 'Sempre que houver dúvida sobre a autenticidade de uma assinatura ou documento, seja em um processo judicial, uma transação comercial ou uma questão pessoal.',
      isOpen: false
    },
    {
      question: 'O laudo grafotécnico tem validade judicial?',
      answer: 'Sim. O laudo pericial grafotécnico é uma prova técnica robusta, amplamente aceita no sistema judiciário brasileiro para embasar decisões.',
      isOpen: false
    },
    {
      question: 'Como é o processo de análise?',
      answer: 'O processo envolve a coleta de padrões de escrita autênticos da pessoa em questão (padrões de confronto) e a comparação detalhada com o documento questionado, utilizando técnicas e equipamentos específicos.',
      isOpen: false
    }
  ]);

  toggleFaq(index: number): void {
    this.faqs.update(currentFaqs => {
      return currentFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      });
    });
  }
}
