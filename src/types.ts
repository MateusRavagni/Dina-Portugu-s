export interface MaterialItem {
  id: string;
  title: string;
  category: string;
  level: string; // e.g. "6º ao 9º ano", "Ensino Médio"
  bncc: string; // e.g. "EF69LP05", "EM13LP01"
  duration: string; // e.g. "45 min"
  objective: string;
  materialsNeeded: string[];
  stepByStep: string[];
  tip: string;
}

export interface DriveFolder {
  id: string;
  name: string;
  color: string;
  itemsCount: number;
  items: MaterialItem[];
}

export interface Testimonial {
  id: string;
  author: string;
  avatarUrl?: string;
  role: string;
  school: string;
  text: string;
  date: string;
  whatsappScreenshot?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CheckoutState {
  isOpen: boolean;
  packageType: 'basic' | 'complete';
  price: number;
}
