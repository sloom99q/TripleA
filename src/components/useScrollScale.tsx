import { useEffect, useRef } from 'react';

/**
 * Lightweight scroll scale hook - applies smooth scaling only to images
 * Uses scroll events with RAF for smooth animation
 * Scale ranges from 1.0 to 1.08 (8% zoom when fully in view)
 */

export function useScrollScale(maxScale = 0.08) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const img = element.querySelector('img') as HTMLImageElement;
    if (!img) return;
    
    // Set initial styles
    img.style.transition = 'transform 400ms ease-out';
    img.style.willChange = 'transform';
    
    let rafId = 0;
    
    const updateScale = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // Calculate visibility (0 = edge of screen, 1 = center of screen)
      const distance = Math.abs(elementCenter - viewportCenter);
      const maxDistance = windowHeight / 2 + rect.height / 2;
      const visibility = Math.max(0, 1 - distance / maxDistance);
      
      // Scale from 1 to 1+maxScale based on visibility
      const scale = 1 + visibility * maxScale;
      img.style.transform = `scale(${scale})`;
    };
    
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScale);
    };
    
    updateScale();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [maxScale]);

  return ref;
}