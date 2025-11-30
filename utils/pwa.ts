/**
 * PWA Utilities - Service Worker Registration
 * 
 * Handles Progressive Web App functionality including:
 * - Service Worker registration
 * - Update notifications
 * - Offline detection
 * - Install prompt handling
 */

// Check if service workers are supported
export const isServiceWorkerSupported = (): boolean => {
  return 'serviceWorker' in navigator;
};

// Register service worker
export const registerServiceWorker = async (): Promise<ServiceWorkerRegistration | null> => {
  if (!isServiceWorkerSupported()) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[PWA] Service Workers not supported in this browser');
    }
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('[PWA] Service Worker registered successfully');
    }

    // Check for updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New service worker is installed and waiting
            if (process.env.NODE_ENV === 'development') {
              console.log('[PWA] New version available! Reload to update.');
            }
            
            // Notify user about update
            showUpdateNotification();
          }
        });
      }
    });

    return registration;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[PWA] Service Worker registration failed:', error);
    }
    return null;
  }
};

// Unregister service worker
export const unregisterServiceWorker = async (): Promise<boolean> => {
  if (!isServiceWorkerSupported()) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration();
    
    if (registration) {
      const success = await registration.unregister();
      
      if (process.env.NODE_ENV === 'development') {
        console.log('[PWA] Service Worker unregistered:', success);
      }
      
      return success;
    }
    
    return false;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[PWA] Service Worker unregister failed:', error);
    }
    return false;
  }
};

// Show update notification
const showUpdateNotification = () => {
  // Create custom event for update notification
  const event = new CustomEvent('sw-update', {
    detail: {
      message: 'New version available! Reload to update.',
    },
  });
  
  window.dispatchEvent(event);
};

// Skip waiting and activate new service worker
export const skipWaiting = async (): Promise<void> => {
  const registration = await navigator.serviceWorker.getRegistration();
  
  if (registration && registration.waiting) {
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
};

// Check if app is running in standalone mode (installed PWA)
export const isStandalone = (): boolean => {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone ||
    document.referrer.includes('android-app://')
  );
};

// Check online/offline status
export const isOnline = (): boolean => {
  return navigator.onLine;
};

// Listen for online/offline events
export const setupOnlineListener = (
  onOnline?: () => void,
  onOffline?: () => void
): (() => void) => {
  const handleOnline = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[PWA] Back online');
    }
    if (onOnline) onOnline();
  };

  const handleOffline = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[PWA] Gone offline');
    }
    if (onOffline) onOffline();
  };

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Return cleanup function
  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
};

// PWA Install Prompt
let deferredPrompt: any = null;

// Listen for beforeinstallprompt event
export const setupInstallPrompt = (): void => {
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    
    // Store the event so it can be triggered later
    deferredPrompt = e;
    
    if (process.env.NODE_ENV === 'development') {
      console.log('[PWA] Install prompt available');
    }
    
    // Dispatch custom event
    const event = new CustomEvent('pwa-installable');
    window.dispatchEvent(event);
  });

  // Listen for app installed
  window.addEventListener('appinstalled', () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[PWA] App installed successfully');
    }
    
    deferredPrompt = null;
    
    // Dispatch custom event
    const event = new CustomEvent('pwa-installed');
    window.dispatchEvent(event);
  });
};

// Show install prompt
export const showInstallPrompt = async (): Promise<boolean> => {
  if (!deferredPrompt) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[PWA] Install prompt not available');
    }
    return false;
  }

  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;

  if (process.env.NODE_ENV === 'development') {
    console.log(`[PWA] User response: ${outcome}`);
  }

  // Clear the deferredPrompt
  deferredPrompt = null;

  return outcome === 'accepted';
};

// Check if install prompt is available
export const isInstallPromptAvailable = (): boolean => {
  return deferredPrompt !== null;
};

// Initialize PWA
export const initializePWA = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[PWA] Initializing...');
  }

  // Register service worker
  await registerServiceWorker();

  // Setup install prompt
  setupInstallPrompt();

  // Setup online/offline listeners
  setupOnlineListener(
    () => {
      // Show online notification
      const event = new CustomEvent('connection-status', {
        detail: { online: true },
      });
      window.dispatchEvent(event);
    },
    () => {
      // Show offline notification
      const event = new CustomEvent('connection-status', {
        detail: { online: false },
      });
      window.dispatchEvent(event);
    }
  );

  if (process.env.NODE_ENV === 'development') {
    console.log('[PWA] Initialized successfully');
    console.log('[PWA] Standalone mode:', isStandalone());
    console.log('[PWA] Online status:', isOnline());
  }
};


