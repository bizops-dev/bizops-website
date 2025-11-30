
import * as Sentry from "@sentry/react";
import { logger } from './logger';

const getEnvVar = (key: string): string => {
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      return import.meta.env[key] || '';
    }
  } catch {
    // Ignore
  }
  
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env[key] || '';
    }
  } catch {
    // Ignore
  }
  
  return '';
};

const getEnvironment = (): string => {
  try {
    // @ts-ignore
    return import.meta.env?.MODE || process.env?.NODE_ENV || 'production';
  } catch {
    return 'production';
  }
};

export const initMonitoring = () => {
  // Attempt to get DSN from standard environment variables
  const dsn = getEnvVar('VITE_SENTRY_DSN') || getEnvVar('REACT_APP_SENTRY_DSN');

  // Only initialize if DSN is present (user has configured .env)
  if (dsn) {
    Sentry.init({
      dsn: dsn,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
      ],
      // Performance Monitoring
      tracesSampleRate: 1.0, // Capture 100% of the transactions
      // Session Replay
      replaysSessionSampleRate: 0.1, // Sample rate for all sessions (10%)
      replaysOnErrorSampleRate: 1.0, // Sample rate for sessions with errors (100%)
      environment: getEnvironment(),
    });
    logger.info("Monitoring Initialized");
  } else {
    logger.debug("Monitoring: No DSN found, skipping initialization.");
  }
};

export const initHeatmap = () => {
  // Placeholder for Hotjar/FullStory integration.
  // In production, this would inject the script tag based on an ENV variable ID.
  
  const hotjarId = getEnvVar('VITE_HOTJAR_ID') || getEnvVar('REACT_APP_HOTJAR_ID');
  
  if (hotjarId) {
    // Example Logic:
    // (function(h,o,t,j,a,r){ ... })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    logger.debug("Heatmap: Analytics Ready (Script injection configured)");
  } else {
    logger.debug("Heatmap: Analytics Ready (Script injection skipped - no ID provided)");
  }
};
