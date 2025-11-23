
import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`bg-slate-200 dark:bg-slate-800 animate-pulse rounded ${className}`}></div>
);

export const SkeletonText: React.FC<{ lines?: number, className?: string }> = ({ lines = 3, className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} className={`h-4 w-${i === lines - 1 ? '2/3' : 'full'}`} />
    ))}
  </div>
);

export const SkeletonCard: React.FC = () => (
  <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
    <Skeleton className="h-48 w-full rounded-xl mb-6" />
    <Skeleton className="h-6 w-3/4 mb-4" />
    <SkeletonText lines={2} />
    <div className="mt-6 flex gap-4">
      <Skeleton className="h-10 w-24 rounded-lg" />
    </div>
  </div>
);
