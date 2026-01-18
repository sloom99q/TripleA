export interface Feature {
  title: string;
  description: string;
}

export interface ProjectDetailsProps {
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  features?: Feature[];
  imagePosition?: 'left' | 'right';
  className?: string;
}
