import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, useSpring, useTransform, useInView } from 'framer-motion';

// 1. Sticky Header Reveal
export const StickyHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY;
    if (Math.abs(diff) > 20) { // Threshold to prevent jitter
      setVisible(diff < 0 || latest < 50); // Show if scrolling up OR at top
      setLastY(latest);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={visible ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 ${className}`}
    >
      {children}
    </motion.header>
  );
};

// 2. Counter Up (Data Viz)
export const CounterUp: React.FC<{ to: number; label: string; prefix?: string; suffix?: string }> = ({ to, label, prefix = '', suffix = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useSpring(0, { duration: 2000 }); // Duration based spring
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(to);
    }
  }, [isInView, to, count]);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [count]);

  return (
    <div ref={ref} className="text-center flex flex-col items-center">
      <motion.span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 mb-2 block">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </motion.span>
      <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{label}</span>
    </div>
  );
};

// 3. Parallax Image (Scroll Effect)
export const ParallaxImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Background bergerak lebih lambat (y: -10% to 10%)
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden rounded-2xl relative ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

// 4. Infinite Scroll Loop (Marquee)
export const InfiniteScrollLoop: React.FC<{ children: React.ReactNode; speed?: number; direction?: 'left' | 'right'; className?: string }> = ({ 
  children, 
  speed = 20, 
  direction = 'left',
  className 
}) => {
  return (
    <div className={`flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}>
      <motion.div 
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-none gap-12 py-4 pr-12 items-center"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};
