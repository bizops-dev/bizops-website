import React, { memo } from 'react';
import { LucideIcon } from 'lucide-react';
import Button from './Button';
import { Inbox, Search, FileX, AlertCircle } from 'lucide-react';

type EmptyStateType = 'no-data' | 'no-results' | 'error' | 'empty';

type EmptyStateProps = {
  type?: EmptyStateType;
  icon?: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};

const defaultIcons: Record<EmptyStateType, LucideIcon> = {
  'no-data': Inbox,
  'no-results': Search,
  'error': AlertCircle,
  'empty': FileX,
};

const EmptyState: React.FC<EmptyStateProps> = memo(({
  type = 'no-data',
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className = '',
}) => {
  const Icon = icon || defaultIcons[type];
  const iconColor = type === 'error' ? 'text-red-500' : 'text-slate-400';

  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      <div className={`w-16 h-16 ${iconColor} mb-4 flex items-center justify-center`}>
        <Icon className="w-full h-full" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction} variant="primary">
          {actionLabel}
        </Button>
      )}
    </div>
  );
});

EmptyState.displayName = 'EmptyState';

export default EmptyState;

