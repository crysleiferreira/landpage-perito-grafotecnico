
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

export interface Credential {
  icon: string;
  text: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
