
import React, { memo } from 'react';
import { Loader2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/**
 * Button component with multiple variants and sizes
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click Me
 * </Button>
 * ```
 * 
 * @example
 * ```tsx
 * <Button variant="outline" isLoading={isSubmitting}>
 *   Submit
 * </Button>
 * ```
 */
type ButtonProps = {
  /** Button content */
  children?: React.ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'accent' | 'white' | 'outline' | 'outline-white' | 'ghost' | 'link';
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Make button full width */
  fullWidth?: boolean;
  /** Show loading spinner */
  isLoading?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Disable button */
  disabled?: boolean;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** ARIA label for accessibility (required for icon-only buttons) */
  'aria-label'?: string;
  /** ARIA described by */
  'aria-describedby'?: string;
  /** ARIA expanded (for dropdowns) */
  'aria-expanded'?: boolean;
  /** ARIA controls (for dropdowns/modals) */
  'aria-controls'?: string;
  /** ARIA pressed (for toggle buttons) */
  'aria-pressed'?: boolean;
};

const Button: React.FC<ButtonProps> = memo(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  isLoading = false,
  className = '',
  disabled,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-expanded': ariaExpanded,
  'aria-controls': ariaControls,
  'aria-pressed': ariaPressed,
}: ButtonProps) => {
  
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed rounded-lg active:scale-[0.98]";
  
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: "bg-primary-600 text-white hover:bg-primary-500 border border-transparent shadow-sm focus:ring-primary-500 hover:shadow-primary-500/25",
    secondary: "bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 border border-transparent shadow-sm focus:ring-slate-900",
    accent: "bg-amber-500 text-slate-950 hover:bg-amber-400 border border-transparent shadow-sm focus:ring-amber-500 hover:shadow-amber-500/25",
    white: "bg-white text-slate-900 hover:bg-slate-50 border border-transparent shadow-sm focus:ring-white",
    outline: "bg-transparent text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 focus:ring-slate-500",
    'outline-white': "bg-transparent text-white border border-white/30 hover:bg-white/10 focus:ring-white",
    ghost: "bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white",
    link: "text-primary-600 hover:underline px-0 shadow-none active:scale-100",
  };

  const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: "h-11 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      type={type}
      className={twMerge(baseStyles, variants[variant], sizes[size], widthClass, className)}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-pressed={ariaPressed}
      aria-busy={isLoading}
    >
      {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
