import React, { memo } from 'react';

/**
 * Stack component for consistent vertical/horizontal spacing
 * 
 * @example
 * ```tsx
 * <Stack direction="vertical" gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 * 
 * <Stack direction="horizontal" gap={2} align="center">
 *   <Button>Action 1</Button>
 *   <Button>Action 2</Button>
 * </Stack>
 * ```
 */
type StackProps = {
  /** Content */
  children: React.ReactNode;
  /** Stack direction */
  direction?: 'vertical' | 'horizontal';
  /** Gap between items (in Tailwind spacing scale) */
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  /** Alignment */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Justify content */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /** Wrap items */
  wrap?: boolean;
  /** Additional CSS classes */
  className?: string;
};

const Stack: React.FC<StackProps> = memo(({
  children,
  direction = 'vertical',
  gap = 4,
  align,
  justify,
  wrap = false,
  className = '',
}) => {
  const directionClass = direction === 'vertical' ? 'flex-col' : 'flex-row';
  const gapClass = `gap-${gap}`;
  
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const classes = [
    'flex',
    directionClass,
    gapClass,
    align ? alignClasses[align] : '',
    justify ? justifyClasses[justify] : '',
    wrap ? 'flex-wrap' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
});

Stack.displayName = 'Stack';

export default Stack;

