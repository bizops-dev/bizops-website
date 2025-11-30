/**
 * Analytics & Event Tracking Utility
 * 
 * Provides centralized event tracking for:
 * - Page views
 * - User interactions
 * - Conversion events
 * - Custom business events
 */

import { logger } from './logger';
import { getEnvConfig } from './env';

type EventProperties = Record<string, string | number | boolean | null | undefined>;

type TrackingEvent = {
  name: string;
  properties?: EventProperties;
  timestamp?: number;
};

// In-memory event queue (for batching)
let eventQueue: Array<TrackingEvent> = [];
let isInitialized = false;

/**
 * Initialize tracking
 * Sets up tracking based on environment
 */
export const initTracking = (): void => {
  if (isInitialized) return;
  
  const config = getEnvConfig();
  
  // In production, initialize real analytics (Google Analytics, etc.)
  // For now, we just log in development
  if (config.isDevelopment) {
    logger.debug('Tracking: Initialized (development mode)');
  }
  
  // Track page view on init
  trackPageView(window.location.pathname);
  
  // Listen for route changes (if using React Router)
  window.addEventListener('popstate', () => {
    trackPageView(window.location.pathname);
  });
  
  isInitialized = true;
};

/**
 * Track page view
 */
export const trackPageView = (path: string, title?: string): void => {
  const event: TrackingEvent = {
    name: 'page_view',
    properties: {
      path,
      title: title || document.title,
      referrer: document.referrer,
    },
    timestamp: Date.now(),
  };
  
  sendEvent(event);
};

/**
 * Track custom event
 */
export const trackEvent = (
  eventName: string,
  properties?: EventProperties
): void => {
  const event: TrackingEvent = {
    name: eventName,
    properties: {
      ...properties,
      url: window.location.href,
      path: window.location.pathname,
    },
    timestamp: Date.now(),
  };
  
  sendEvent(event);
};

/**
 * Track conversion event
 */
export const trackConversion = (
  conversionType: string,
  value?: number,
  properties?: EventProperties
): void => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value,
    ...properties,
  });
};

/**
 * Track user interaction
 */
export const trackInteraction = (
  action: string,
  element: string,
  properties?: EventProperties
): void => {
  trackEvent('user_interaction', {
    action,
    element,
    ...properties,
  });
};

/**
 * Track tool usage
 */
export const trackToolUsage = (
  toolName: string,
  action: string,
  properties?: EventProperties
): void => {
  trackEvent('tool_usage', {
    tool_name: toolName,
    action,
    ...properties,
  });
};

/**
 * Send event to analytics service
 */
const sendEvent = (event: TrackingEvent): void => {
  const config = getEnvConfig();
  
  // In development, log to console
  if (config.isDevelopment) {
    logger.debug('Tracking Event:', event);
  }
  
  // In production, send to analytics service
  // Example: Google Analytics, Mixpanel, etc.
  if (config.isProduction) {
    // TODO: Implement actual analytics service integration
    // Example:
    // if (window.gtag) {
    //   window.gtag('event', event.name, event.properties);
    // }
    
    // For now, queue events (could batch and send)
    eventQueue.push(event);
    
    // Flush queue periodically or on important events
    if (eventQueue.length >= 10 || event.name === 'conversion') {
      flushEventQueue();
    }
  }
};

/**
 * Flush event queue
 */
const flushEventQueue = (): void => {
  if (eventQueue.length === 0) return;
  
  // In production, send batch to analytics service
  // For now, just clear queue
  const events = [...eventQueue];
  eventQueue = [];
  
  logger.debug(`Tracking: Flushed ${events.length} events`);
  
  // TODO: Send to analytics service
  // Example: fetch('/api/analytics', { method: 'POST', body: JSON.stringify(events) });
};

/**
 * Track error
 */
export const trackError = (
  error: Error,
  context?: EventProperties
): void => {
  trackEvent('error', {
    error_message: error.message,
    error_stack: error.stack,
    ...context,
  });
};

/**
 * Set user properties
 */
export const setUserProperties = (properties: EventProperties): void => {
  // Store in localStorage or send to analytics service
  localStorage.setItem('analytics_user_properties', JSON.stringify(properties));
};

/**
 * Get user properties
 */
export const getUserProperties = (): EventProperties => {
  try {
    const stored = localStorage.getItem('analytics_user_properties');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

