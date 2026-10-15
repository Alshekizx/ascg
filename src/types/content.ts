export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  featured: boolean;
  img: string;
  excerpt: string;
  sections: { id: string; heading: string; paragraphs: string[] }[];
  readingMinutes: number;
}
export interface Publication {
  id: string;
  title: string;
  type: string;
  year: string;
  author: string;
  date: string;
  summary: string;
  pages: string;
  img: string;
  file?: string;
}
export interface Photo {
  id: string;
  title: string;
  img: string;
  caption: string;
  album: string;
}
export interface Press {
  title: string;
  date: string;
  excerpt: string;
  body?: string;
}
export interface Speech {
  title: string;
  date: string;
  speaker: string;
  event: string;
  file?: string;
}
export interface Coverage {
  title: string;
  date: string;
  outlet: string;
  url?: string;
}
export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  type: string;
  desc: string;
  speakers: string[];
  img: string;
  registration: boolean;
  past: boolean;
}
export interface Programme {
  id: string;
  title: string;
  description: string;
}
export interface Leader {
  id: string;
  slug: string;
  title: string;
  name: string;
  position: string;
  biography: string;
  img: string;
  founder: boolean;
}
export interface Partner {
  id: string;
  title: string;
  name: string;
  description: string;
  img: string;
  url: string;
}
export interface Settings {
  name: string;
  fullName: string;
  shortName: string;
  email: string;
  ceoEmail: string;
  phone: string;
  address: string;
  tagline: string;
  description: string;
  headerLogo: string;
  footerLogo: string;
  primaryLogo: string;
  metadataImage: string;
  adminUrl: string;
  twitter: string;
  linkedin: string;
  facebook: string;
  instagram: string;
}
