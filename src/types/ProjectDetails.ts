import { StaticImageData } from 'next/image';

export interface Feature {
  title: string;
  description: string;
}

export interface ProjectDetailsProps {
  image?: string | StaticImageData;
  imageAlt?: string;
  title: string;
  description: string;
  scopeOfWork?: string[];
  features?: Feature[];
  imagePosition?: 'left' | 'right';
  className?: string;
}
