'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { ReactNode } from 'react';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useSmoothScroll();
  return <>{children}</>;
}
