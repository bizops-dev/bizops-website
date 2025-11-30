import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { SPRING_TRANSITION } from '../../utils/animation';

// 1. Bouncy Button (Scale & Tap)
export const BouncyButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={SPRING_TRANSITION}
      className={twMerge("px-6 py-3 bg-primary-600 text-white rounded-lg font-bold shadow-lg", className)}
      {...props as any} 
    >
      {children}
    </motion.button>
  );
};

// 2. Magnetic Button (Advanced)
export const MagneticButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion values for raw mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the "magnetic" lag effect
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Move the button slightly towards the cursor (divide by factor to limit range)
    x.set((clientX - centerX) / 3); 
    y.set((clientY - centerY) / 3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }} // Apply physics
      className={`inline-block cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

