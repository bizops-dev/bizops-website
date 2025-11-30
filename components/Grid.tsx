import React, { memo } from 'react';

/**
 * Grid component for consistent grid layouts
 * 
 * @example
 * ```tsx
 * <Grid cols={3} gap={6}>
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </Grid>
 * ```
 */
type GridProps = {
  /** Content */
  children: React.ReactNode;
  /** Number of columns on large screens */
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Number of columns on medium screens */
  mdCols?: 1 | 2 | 3 | 4;
  /** Number of columns on small screens */
  smCols?: 1 | 2;
  /** Gap between items (in Tailwind spacing scale) */
  gap?: 2 | 4 | 6 | 8 | 10 | 12;
  /** Additional CSS classes */
  className?: string;
};

const Grid: React.FC<GridProps> = memo(({
  children,
  cols = 3,
  mdCols = 2,
  smCols = 1,
  gap = 6,
  className = '',
}) => {
  const colsClass = `lg:grid-cols-${cols}`;
  const mdColsClass = `md:grid-cols-${mdCols}`;
  const smColsClass = `grid-cols-${smCols}`;
  const gapClass = `gap-${gap}`;

  const classes = [
    'grid',
    smColsClass,
    mdColsClass,
    colsClass,
    gapClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';

export default Grid;

