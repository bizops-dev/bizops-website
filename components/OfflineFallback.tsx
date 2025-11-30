import React from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';
import Button from './Button';

const OfflineFallback: React.FC = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <WifiOff className="w-10 h-10 text-slate-400" />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          You're Offline
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Please check your internet connection and try again.
        </p>
        
        <Button onClick={handleRetry} className="flex items-center gap-2 mx-auto">
          <RefreshCw className="w-4 h-4" />
          Retry Connection
        </Button>
      </div>
    </div>
  );
};

export default OfflineFallback;

