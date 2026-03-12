'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number; // 0.1 = very subtle, 0.5 = moderate
  direction?: 'up' | 'down';
}

// Hook for scroll-based parallax effect on elements
export function useParallax<T extends HTMLElement = HTMLElement>(
  options: ParallaxOptions = {}
): RefObject<T | null> {
  const { speed = 0.15, direction = 'down' } = options;
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let ticking = false;
    let rafId: number | null = null;
    let currentY = 0;
    let targetY = 0;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updatePosition = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      
      // Calculate target offset
      const multiplier = direction === 'down' ? 1 : -1;
      targetY = distanceFromCenter * speed * multiplier;
    };

    const animate = () => {
      // Very slow lerp for smooth movement
      currentY = lerp(currentY, targetY, 0.03);
      
      // Apply transform with will-change for GPU acceleration
      element.style.transform = `translate3d(0, ${currentY}px, 0)`;
      
      // Continue animation loop only if we're still ticking
      if (ticking) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      updatePosition();
      if (!ticking) {
        ticking = true;
        animate();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updatePosition, { passive: true });
    
    // Initial position
    updatePosition();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updatePosition);
      ticking = false;
      if (rafId) cancelAnimationFrame(rafId);
      element.style.willChange = 'auto';
    };
  }, [speed, direction]);

  return elementRef;
}

// Hook for smooth scale effect on scroll (images grow slightly as they enter view)
export function useScrollScale<T extends HTMLElement = HTMLElement>(
  options: { minScale?: number; maxScale?: number } = {}
): RefObject<T | null> {
  const { minScale = 1, maxScale = 1.08 } = options;
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let currentScale = minScale;
    let targetScale = minScale;
    let rafId: number | null = null;
    let ticking = false;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateScale = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate visibility ratio (0 = not visible, 1 = fully in center)
      const elementCenter = rect.top + rect.height / 2;
      const visibility = 1 - Math.abs(elementCenter - windowHeight / 2) / (windowHeight / 2);
      const normalizedVisibility = Math.max(0, Math.min(1, visibility));
      
      // Scale based on visibility
      targetScale = minScale + (maxScale - minScale) * normalizedVisibility;
    };

    const animate = () => {
      // Very slow lerp for ultra-smooth scaling
      currentScale = lerp(currentScale, targetScale, 0.025);
      
      element.style.transform = `scale(${currentScale})`;
      
      // Continue animation loop only if ticking
      if (ticking) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      updateScale();
      if (!ticking) {
        ticking = true;
        animate();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateScale, { passive: true });
    
    updateScale();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateScale);
      ticking = false;
      if (rafId) cancelAnimationFrame(rafId);
      element.style.willChange = 'auto';
    };
  }, [minScale, maxScale]);

  return elementRef;
}
