import React, { memo } from 'react';

/**
 * Container component for consistent max-width and padding
 * 
 * @example
 * ```tsx
 * <Container>Content</Container>
 * <Container size="lg">Wide content</Container>
 * <Container size="sm" noPadding>Custom padding</Container>
 * ```
 */
type ContainerProps = {
  /** Content */
  children: React.ReactNode;
  /** Container max-width */
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'full';
  /** Remove horizontal padding */
  noPadding?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** HTML element to render */
  as?: 'div' | 'section' | 'article' | 'main' | 'aside';
};

const Container: React.FC<ContainerProps> = memo(({
  children,
  size = 'default',
  noPadding = false,
  className = '',
  as: Component = 'div',
}) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-[1400px]',
    xl: 'max-w-[1600px]',
    full: 'max-w-full',
  };

  const paddingClass = noPadding ? '' : 'px-4 sm:px-6 lg:px-8';

  const classes = [
    sizeClasses[size],
    'mx-auto',
    paddingClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
});

Container.displayName = 'Container';

export default Container;

