
import React, { memo } from 'react';

const Loading: React.FC = memo(() => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-950 z-50 flex flex-col items-center justify-center transition-colors duration-300">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-slate-100 dark:border-slate-800 rounded-full"></div>
        {/* Spinning Ring */}
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        {/* Logo Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-primary-600 rounded-sm rotate-45"></div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-slate-900 dark:text-white font-bold text-lg tracking-tight">BizOps</h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest mt-1 animate-pulse">Loading Environment</p>
      </div>
    </div>
  );
});

Loading.displayName = 'Loading';

export default Loading;
