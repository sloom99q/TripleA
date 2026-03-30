'use client';

import { useEffect } from 'react';

// Smooth, subtle hero title shift that works with both native scroll and Lenis.
let initialized = false;
let targetShift = 0;
let currentShift = 0;
let rafId: number | null = null;
let detachLenisListener: (() => void) | null = null;

const TOUCH_MEDIA_QUERY = '(pointer: coarse)';

const isTouchDevice = () =>
  typeof window !== 'undefined' && window.matchMedia(TOUCH_MEDIA_QUERY).matches;

const getScrollTop = () =>
  window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

const getShiftFromScroll = (scrollTop: number) => {
  const touch = isTouchDevice();
  const speed = touch ? 0.085 : 0.11; // stronger movement while still smooth on touch
  const maxShift = touch ? 64 : 84; // allow headings to travel further down
  return Math.min(scrollTop * speed, maxShift);
};

const setCssShift = (value: number) => {
  document.documentElement.style.setProperty('--scroll-shift', `${value.toFixed(3)}px`);
};

const animate = () => {
  const delta = targetShift - currentShift;

  // Smooth easing (lerp): fast enough to feel responsive, slow enough to feel premium.
  currentShift += delta * 0.1;
  setCssShift(currentShift);

  if (Math.abs(delta) > 0.08) {
    rafId = requestAnimationFrame(animate);
    return;
  }

  currentShift = targetShift;
  setCssShift(currentShift);
  rafId = null;
};

const scheduleAnimation = () => {
  if (rafId !== null) return;
  rafId = requestAnimationFrame(animate);
};

const updateTargetFromScroll = (scrollTop: number) => {
  targetShift = getShiftFromScroll(scrollTop);
  scheduleAnimation();
};

const onNativeScroll = () => {
  updateTargetFromScroll(getScrollTop());
};

export function initScrollShift() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  window.addEventListener('scroll', onNativeScroll, { passive: true });
  window.addEventListener('resize', onNativeScroll, { passive: true });

  // If Lenis is active, prefer its animated scroll value for maximum smoothness.
  const lenis = (window as unknown as { lenis?: { on: (event: string, cb: (e: { animatedScroll?: number; scroll?: number }) => void) => void; off: (event: string, cb: (e: { animatedScroll?: number; scroll?: number }) => void) => void } | null }).lenis;
  if (lenis?.on && lenis?.off) {
    const onLenisScroll = (event: { animatedScroll?: number; scroll?: number }) => {
      const value = event.animatedScroll ?? event.scroll ?? getScrollTop();
      updateTargetFromScroll(value);
    };

    lenis.on('scroll', onLenisScroll);
    detachLenisListener = () => {
      lenis.off('scroll', onLenisScroll);
    };
  }

  updateTargetFromScroll(getScrollTop());
}

export function destroyScrollShift() {
  if (!initialized || typeof window === 'undefined') return;

  window.removeEventListener('scroll', onNativeScroll);
  window.removeEventListener('resize', onNativeScroll);

  if (detachLenisListener) {
    detachLenisListener();
    detachLenisListener = null;
  }

  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  initialized = false;
  targetShift = 0;
  currentShift = 0;
  setCssShift(0);
}

// Hook wrapper
export function useScrollShift() {
  useEffect(() => {
    initScrollShift();
    return () => {
      destroyScrollShift();
    };
  }, []);
}
