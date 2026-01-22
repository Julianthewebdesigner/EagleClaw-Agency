
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
