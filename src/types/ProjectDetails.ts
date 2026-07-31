import { StaticImageData } from 'next/image';

export interface Feature {
  title: string;
  description: string;
}

export interface ProjectDetailsProps {
  image?: string | StaticImageData;
  imageAlt?: string;
  /** Optional MP4/WebM source. When set, an autoplaying muted loop <video> is
   *  rendered instead of an <img> (used to replace heavy animated GIFs). */
  video?: string;
  title: string;
  description: string;
  scopeOfWork?: string[];
  features?: Feature[];
  imagePosition?: 'left' | 'right';
  className?: string;
}
