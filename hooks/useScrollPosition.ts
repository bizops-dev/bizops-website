import { useState, useEffect } from 'react';

/**
 * Custom hook for tracking scroll position
 * @returns Object with x and y scroll positions
 * 
 * @example
 * const { y } = useScrollPosition();
 * const isScrolled = y > 20;
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call handler right away so state gets updated with initial window position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

/**
 * Simplified hook for checking if user has scrolled past threshold
 * @param threshold - Scroll threshold in pixels (default: 20)
 * @returns Boolean indicating if scrolled past threshold
 * 
 * @example
 * const isScrolled = useIsScrolled(20);
 * 
 * return (
 *   <Navbar className={isScrolled ? 'shadow-lg' : ''} />
 * );
 */
export function useIsScrolled(threshold: number = 20): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}

