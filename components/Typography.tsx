import React, { memo } from 'react';
import { typography } from '../design-tokens';

/**
 * Typography component for consistent text styling
 * Uses design tokens from design-tokens.ts
 * 
 * @example
 * ```tsx
 * <Typography variant="h1" as="h1">Page Title</Typography>
 * <Typography variant="body">Body text content</Typography>
 * <Typography variant="small" color="muted">Helper text</Typography>
 * ```
 */
type TypographyProps = {
  /** Typography variant from design tokens */
  variant: keyof typeof typography;
  /** HTML element to render */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';
  /** Content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Text color preset */
  color?: 'default' | 'muted' | 'primary' | 'white' | 'success' | 'warning' | 'danger';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Font weight override */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** HTML id attribute */
  id?: string;
};

const Typography: React.FC<TypographyProps> = memo(({
  variant,
  as,
  children,
  className = '',
  color = 'default',
  align,
  weight,
  id,
}) => {
  // Determine default element based on variant
  const defaultElement = (() => {
    if (variant === 'h1') return 'h1';
    if (variant === 'h2') return 'h2';
    if (variant === 'h3') return 'h3';
    if (variant === 'h4') return 'h4';
    if (variant === 'h5') return 'h5';
    if (variant === 'h6') return 'h6';
    return 'p';
  })();

  const Component = as || defaultElement;

  // Color classes
  const colorClasses = {
    default: 'text-slate-900 dark:text-white',
    muted: 'text-slate-600 dark:text-slate-400',
    primary: 'text-primary-600 dark:text-primary-400',
    white: 'text-white',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-amber-600 dark:text-amber-400',
    danger: 'text-red-600 dark:text-red-400',
  };

  // Alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Weight classes
  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const classes = [
    typography[variant],
    colorClasses[color],
    align ? alignClasses[align] : '',
    weight ? weightClasses[weight] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} id={id}>
      {children}
    </Component>
  );
});

Typography.displayName = 'Typography';

export default Typography;

