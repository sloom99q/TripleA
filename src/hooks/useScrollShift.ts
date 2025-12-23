import { useEffect } from 'react';

// Sets a single CSS variable on <html> to drive parallax-ish shifts via pure CSS.
export function useScrollShift() {
  useEffect(() => {
    let last = window.scrollY;
    let shift = 0;
    let raf: number | null = null;

    const write = () => {
      document.documentElement.style.setProperty('--scroll-shift', `${shift}px`);
      raf = null;
    };

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - last;
      shift = Math.max(0, Math.min(120, shift + delta * 0.25));
      last = current;
      if (raf === null) raf = requestAnimationFrame(write);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    write();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
      document.documentElement.style.removeProperty('--scroll-shift');
    };
  }, []);
}
