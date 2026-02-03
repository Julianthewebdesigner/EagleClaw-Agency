
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

export interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  results: string[];
  screenshot: string;
  category: string;
  year: string;
}
