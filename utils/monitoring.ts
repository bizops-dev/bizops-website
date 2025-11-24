
import * as Sentry from "@sentry/react";

export const initMonitoring = () => {
  // Attempt to get DSN from standard environment variables
  let dsn = "";
  
  try {
    // Check for Vite env vars
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SENTRY_DSN) {
      // @ts-ignore
      dsn = import.meta.env.VITE_SENTRY_DSN;
    }
  } catch (e) {
    // Ignore errors accessing import.meta
  }

  if (!dsn) {
    try {
      // Check for CRA/Node env vars
      if (typeof process !== 'undefined' && process.env && process.env.REACT_APP_SENTRY_DSN) {
        dsn = process.env.REACT_APP_SENTRY_DSN;
      }
    } catch (e) {
      // Ignore errors accessing process.env
    }
  }

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
      // @ts-ignore
      environment: import.meta.env?.MODE || process.env?.NODE_ENV || 'production',
    });
    if (process.env.NODE_ENV === 'development') {
      console.log("BizOps Monitoring Initialized");
    }
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.log("BizOps Monitoring: No DSN found, skipping initialization.");
    }
  }
};

export const initHeatmap = () => {
  // Placeholder for Hotjar/FullStory integration.
  // In production, this would inject the script tag based on an ENV variable ID.
  
  if (process.env.NODE_ENV === 'production') {
    // Example Logic:
    // const HOTJAR_ID = process.env.REACT_APP_HOTJAR_ID;
    // if (HOTJAR_ID) {
    //    (function(h,o,t,j,a,r){ ... })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    // }
    if (process.env.NODE_ENV === 'development') {
      console.log("BizOps Heatmap: Analytics Ready (Script injection skipped in mock env)");
    }
  }
};
