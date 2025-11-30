import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import Button from './Button';
import { isInstallPromptAvailable, showInstallPrompt } from '../utils/pwa';

type PWAInstallPromptProps = {
  onDismiss?: () => void;
};

const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = ({ onDismiss }) => {
  const [show, setShow] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    // Check if install prompt is available
    const checkAvailability = () => {
      const available = isInstallPromptAvailable();
      setIsAvailable(available);
      setShow(available);
    };

    // Listen for install prompt events
    const handleInstallable = () => {
      setIsAvailable(true);
      setShow(true);
    };

    const handleInstalled = () => {
      setIsAvailable(false);
      setShow(false);
    };

    window.addEventListener('pwa-installable', handleInstallable);
    window.addEventListener('pwa-installed', handleInstalled);

    // Initial check
    checkAvailability();

    return () => {
      window.removeEventListener('pwa-installable', handleInstallable);
      window.removeEventListener('pwa-installed', handleInstalled);
    };
  }, []);

  const handleInstall = async () => {
    const success = await showInstallPrompt();
    if (success) {
      setShow(false);
      if (onDismiss) onDismiss();
    }
  };

  const handleDismiss = () => {
    setShow(false);
    if (onDismiss) onDismiss();
    // Store dismissal in localStorage to not show again for 7 days
    localStorage.setItem('pwa_install_dismissed', Date.now().toString());
  };

  // Check if user dismissed recently
  useEffect(() => {
    const dismissed = localStorage.getItem('pwa_install_dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed, 10);
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - dismissedTime < sevenDays) {
        setShow(false);
      }
    }
  }, []);

  if (!show || !isAvailable) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-sm z-50 animate-fade-in-up">
      <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-600">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Install BizOps
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Add to home screen for quick access
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" fullWidth onClick={handleInstall}>
            Install Now
          </Button>
          <Button variant="ghost" size="sm" onClick={handleDismiss}>
            Later
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;

