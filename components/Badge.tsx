
import React, { memo } from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'outline' | 'dark';
  className?: string;
  size?: 'sm' | 'md';
}

const Badge: React.FC<BadgeProps> = memo(({ children, variant = 'neutral', className = '', size = 'sm' }) => {
  const variants = {
    primary: "bg-primary-50 text-primary-700 border-primary-100 dark:bg-primary-900/30 dark:text-primary-300 dark:border-primary-800",
    success: "bg-green-50 text-green-700 border-green-100 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
    warning: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
    danger: "bg-red-50 text-red-700 border-red-100 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
    neutral: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
    outline: "bg-transparent text-slate-600 border-slate-300 dark:text-slate-400 dark:border-slate-600",
    dark: "bg-slate-900 text-white border-slate-800 dark:bg-white dark:text-slate-900"
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm"
  };

  return (
    <span className={`inline-flex items-center rounded-full font-bold uppercase tracking-wide border ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;
