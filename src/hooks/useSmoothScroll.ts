import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

// Feature detection
const isTouchDevice = () => 
  typeof window !== 'undefined' && 
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const isIOS = () =>
  typeof navigator !== 'undefined' &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

// Creates smooth scroll - platform-aware
export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const iOS = isIOS();
    const isTouch = isTouchDevice();
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.65,
      touchMultiplier: 1.0,
      // iOS: NO touch control (native only), Android: allow syncTouch
      syncTouch: isTouch && !iOS,
      syncTouchLerp: 0.075,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    (window as any).lenis = lenis;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
      (window as any).lenis = null;
    };
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return lenisRef;
}

/**
 * Scroll to an element using Lenis if available, with fallback to native scroll.
 * Works even when Lenis is mid-animation.
 * Centers the element in the viewport by default.
 */
export function scrollToElement(
  target: HTMLElement | string,
  options: { offset?: number; duration?: number; immediate?: boolean; center?: boolean } = {}
) {
  const lenis = (window as any).lenis as Lenis | null;
  const element = typeof target === 'string' 
    ? document.querySelector(target) as HTMLElement
    : target;
  
  if (!element) return;

  // Calculate offset to center the element in viewport
  const shouldCenter = options.center ?? true;
  let offset = options.offset ?? 0;
  
  if (shouldCenter) {
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    offset = -(windowHeight / 2) + (elementHeight / 2) + (options.offset ?? 0);
  }
  
  if (lenis) {
    lenis.scrollTo(element, {
      offset,
      duration: options.duration ?? 1.2,
      immediate: options.immediate ?? false,
    });
  } else {
    // Fallback for when Lenis isn't available
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
