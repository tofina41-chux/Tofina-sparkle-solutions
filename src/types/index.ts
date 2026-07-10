export interface Service {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  features: string[];
  image: string;
  startingPrice: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  summary: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  before: string;
  after: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface QuoteFormValues {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  preferredDate: string;
  description: string;
  files: FileList | null;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
