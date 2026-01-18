// Direct scroll shift - CSS variable updates WITH scroll position
// Throttled with RAF for smooth mobile performance

let initialized = false;
let ticking = false;

function updateShift() {
  const shift = Math.min(window.scrollY * 0.3, 120);
  document.documentElement.style.setProperty('--scroll-shift', `${shift}px`);
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateShift);
    ticking = true;
  }
}

export function initScrollShift() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;
  
  window.addEventListener('scroll', onScroll, { passive: true });
  updateShift();
}

// Hook version for backwards compatibility
export function useScrollShift() {
  initScrollShift();
}
