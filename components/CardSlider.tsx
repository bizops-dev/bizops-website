
import React, { useRef, useState, useEffect } from 'react';

interface CardSliderProps {
  children: React.ReactNode;
  desktopClassName?: string; // e.g., "md:grid md:grid-cols-3 md:gap-8"
  mobileItemWidth?: string; // e.g., "w-[85vw]"
  desktopItemWidth?: string; // Optional: Override desktop item width (e.g., "lg:w-full")
  desktopItemClassName?: string | ((index: number) => string); // Optional: Full control over desktop item classes
  className?: string;
  label?: string; // For accessibility aria-label
  breakpoint?: 'md' | 'lg'; // New prop to control where the slider behavior stops
}

const CardSlider: React.FC<CardSliderProps> = ({
  children,
  desktopClassName = "md:grid md:grid-cols-3 md:gap-8",
  mobileItemWidth = "w-[85vw] sm:w-[60vw]",
  desktopItemWidth,
  desktopItemClassName,
  className = "",
  label = "Content Slider",
  breakpoint = 'md'
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childCount = React.Children.count(children);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      // Use the first child width for calculation
      const itemWidth = slider.children[0]?.clientWidth || 0;
      
      if (itemWidth > 0) {
        const index = Math.round(scrollLeft / itemWidth);
        setActiveIndex(Math.min(Math.max(index, 0), childCount - 1));
      }
    };

    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [childCount]);

  const scrollTo = (index: number) => {
    const slider = sliderRef.current;
    if (slider) {
      const itemWidth = slider.children[0]?.clientWidth || 0;
      // Clamp index
      const targetIndex = Math.max(0, Math.min(index, childCount - 1));
      slider.scrollTo({ left: targetIndex * itemWidth, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollTo(activeIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollTo(activeIndex - 1);
    }
  };

  const resetClass = breakpoint === 'lg' 
    ? "lg:mx-0 lg:px-0 lg:pb-0 lg:overflow-visible lg:snap-none"
    : "md:mx-0 md:px-0 md:pb-0 md:overflow-visible md:snap-none";
    
  // Use provided desktopItemWidth or fallback to default logic
  const defaultDesktopWidthClass = breakpoint === 'lg' ? "lg:w-auto" : "md:w-auto";
  const finalDesktopWidth = desktopItemWidth !== undefined ? desktopItemWidth : defaultDesktopWidthClass;
  
  const indicatorHideClass = breakpoint === 'lg' ? "lg:hidden" : "md:hidden";

  return (
    <div className={`relative group ${className}`} role="region" aria-label={label}>
      {/* Container */}
      <div
        ref={sliderRef}
        onKeyDown={handleKeyDown}
        className={`
          flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 -mx-4 scroll-smooth
          ${resetClass}
          scrollbar-hide focus:outline-none focus:ring-2 focus:ring-primary-500/20 rounded-xl
          ${desktopClassName}
        `}
        tabIndex={0}
      >
        {React.Children.map(children, (child, index) => {
          let desktopClass = finalDesktopWidth;
          if (desktopItemClassName) {
             if (typeof desktopItemClassName === 'function') {
                desktopClass = desktopItemClassName(index);
             } else {
                desktopClass = desktopItemClassName;
             }
          }

          return (
            <div className={`flex-shrink-0 snap-center ${mobileItemWidth} ${desktopClass} h-full`}>
              {child}
            </div>
          );
        })}
      </div>

      {/* Mobile Indicators (Dots) */}
      <div className={`flex justify-center gap-2 absolute bottom-0 left-0 right-0 ${indicatorHideClass} pointer-events-none h-6`} aria-hidden="true">
        {Array.from({ length: childCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              i === activeIndex ? 'bg-primary-600 w-6' : 'bg-slate-300 hover:bg-primary-400 w-1.5'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
