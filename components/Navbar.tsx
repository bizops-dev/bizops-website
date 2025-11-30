import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import DemoModal from './DemoModal';
import NavbarLogo from './navbar/NavbarLogo';
import NavbarDesktop, { NavbarActions } from './navbar/NavbarDesktop';
import NavbarMobile from './navbar/NavbarMobile';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastY;
    // Hide header on scroll down, show on scroll up OR if at top
    if (Math.abs(diff) > 20) {
      setIsVisible(diff < 0 || latest < 50);
      setLastY(latest);
    }
    // Styling logic
    setIsScrolled(latest > 20);
  });
  
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const openDemo = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsDemoModalOpen(true);
    setIsOpen(false);
  };

  const handleMobileClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800' 
            : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            <NavbarLogo />
            <NavbarDesktop onDemoClick={openDemo} />
            <NavbarActions onDemoClick={openDemo} />
            <NavbarMobile 
              isOpen={isOpen} 
              onToggle={() => setIsOpen(!isOpen)} 
              onClose={handleMobileClose}
              onDemoClick={openDemo}
            />
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
