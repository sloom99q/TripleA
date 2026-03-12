import { StaticImageData } from 'next/image';

export interface Client {
  id: string;
  logo: string | StaticImageData;
  alt: string;
}

export interface ClientsSectionProps {
  title?: string;
  description?: string;
  clients: Client[];
}