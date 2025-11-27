
import React, { memo } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  noPadding?: boolean;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = memo(({ 
  children, 
  className = "", 
  id, 
  containerClassName = "",
  noPadding = false,
  dark = false
}) => {
  const bgClass = dark ? 'bg-slate-900 text-white' : 'bg-white dark:bg-slate-950 text-slate-900 dark:text-white';
  const paddingClass = noPadding ? '' : 'py-16 md:py-24 lg:py-32';
  
  return (
    <section id={id} className={`${bgClass} ${paddingClass} ${className} transition-colors duration-300`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
