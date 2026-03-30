'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useScrollShift } from '@/hooks/useScrollShift';
import { ReactNode } from 'react';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useSmoothScroll();
  useScrollShift();
  return <>{children}</>;
}
