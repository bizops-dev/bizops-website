
import React, { memo } from 'react';

/**
 * Card component for displaying content in a contained box
 * 
 * @example
 * ```tsx
 * <Card variant="default" padding="md" hoverEffect>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 * ```
 */
type CardProps = {
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Enable hover elevation effect */
  hoverEffect?: boolean;
  /** Visual style variant */
  variant?: 'default' | 'outline' | 'flat' | 'dark';
  /** Click handler */
  onClick?: () => void;
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
};

const Card: React.FC<CardProps> = memo(({ 
  children, 
  className = "", 
  hoverEffect = false,
  variant = 'default',
  onClick,
  padding = 'md'
}) => {
  
  const baseStyles = "rounded-2xl transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    default: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm",
    outline: "bg-transparent border border-slate-200 dark:border-slate-700",
    flat: "bg-slate-50 dark:bg-slate-800/50 border-none",
    dark: "bg-slate-900 text-white border border-slate-800"
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10"
  };

  const hoverStyles = hoverEffect ? "hover:shadow-xl hover:-translate-y-2 hover:border-primary-300 dark:hover:border-primary-700 hover:ring-2 hover:ring-primary-500/10 cursor-pointer transition-shadow duration-300" : "";

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
