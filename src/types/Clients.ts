export interface Client {
  id: string;
  logo: string;
  alt: string;
}

export interface ClientsSectionProps {
  title?: string;
  description?: string;
  clients: Client[];
}