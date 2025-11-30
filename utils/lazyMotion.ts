/**
 * Lazy-loaded Framer Motion utilities
 * Reduces initial bundle size by code-splitting motion components
 */

import { lazy } from 'react';

// Lazy load motion components
export const LazyMotion = lazy(() => 
  import('framer-motion').then((mod) => ({ default: mod.motion }))
);

export const LazyAnimatePresence = lazy(() =>
  import('framer-motion').then((mod) => ({ default: mod.AnimatePresence }))
);

// Helper to lazy load specific motion features
export const lazyMotionDiv = () => lazy(() =>
  import('framer-motion').then((mod) => ({ default: mod.motion.div }))
);

export const lazyMotionButton = () => lazy(() =>
  import('framer-motion').then((mod) => ({ default: mod.motion.button }))
);

