import { Variants } from "framer-motion";

// 1. Physics Configuration (The "Snappy" Feel)
export const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 400,
  damping: 30, // Minimal overshoot
  mass: 1,
};

export const SOFT_SPRING = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

// 2. Reusable Variants (DRY Principle)
export const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: SPRING_TRANSITION
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.2 } 
  }
};

export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // Choreography delay per item
      delayChildren: 0.1
    }
  }
};

