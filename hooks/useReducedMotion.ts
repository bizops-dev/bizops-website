import { useState, useEffect } from 'react';

/**
 * Hook to detect if user prefers reduced motion
 * Respects prefers-reduced-motion media query
 * 
 * @example
 * ```tsx
 * const prefersReducedMotion = useReducedMotion();
 * 
 * <motion.div
 *   initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
 *   animate={{ opacity: 1, y: 0 }}
 *   transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
 * >
 *   Content
 * </motion.div>
 * ```
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is defined (SSR safety)
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } 
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, []);

  return prefersReducedMotion;
};

/**
 * Get animation duration based on reduced motion preference
 * 
 * @param normalDuration - Duration in seconds for normal motion
 * @returns Duration in seconds (0 if reduced motion preferred)
 */
export const getAnimationDuration = (normalDuration: number): number => {
  if (typeof window === 'undefined') {
    return normalDuration;
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches ? 0 : normalDuration;
};

/**
 * Get transition config for Framer Motion based on reduced motion preference
 * 
 * @param normalTransition - Normal transition config
 * @returns Transition config (instant if reduced motion preferred)
 */
export const getMotionTransition = (normalTransition: any) => {
  if (typeof window === 'undefined') {
    return normalTransition;
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (mediaQuery.matches) {
    return { duration: 0 };
  }

  return normalTransition;
};

