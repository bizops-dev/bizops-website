/**
 * Production-safe logger utility
 * Removes all console.log in production builds
 */

type LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug';

const isDevelopment = () => {
  try {
    // @ts-ignore
    return import.meta.env?.MODE === 'development' || process.env.NODE_ENV === 'development';
  } catch {
    return false;
  }
};

const shouldLog = (level: LogLevel): boolean => {
  if (isDevelopment()) return true;
  
  // In production, only log errors
  return level === 'error';
};

export const logger = {
  log: (...args: Array<unknown>) => {
    if (shouldLog('log')) {
      console.log('[BizOps]', ...args);
    }
  },
  
  warn: (...args: Array<unknown>) => {
    if (shouldLog('warn')) {
      console.warn('[BizOps]', ...args);
    }
  },
  
  error: (...args: Array<unknown>) => {
    if (shouldLog('error')) {
      console.error('[BizOps]', ...args);
    }
  },
  
  info: (...args: Array<unknown>) => {
    if (shouldLog('info')) {
      console.info('[BizOps]', ...args);
    }
  },
  
  debug: (...args: Array<unknown>) => {
    if (shouldLog('debug')) {
      console.debug('[BizOps]', ...args);
    }
  },
  
  group: (label: string) => {
    if (shouldLog('log')) {
      console.group(label);
    }
  },
  
  groupEnd: () => {
    if (shouldLog('log')) {
      console.groupEnd();
    }
  },
  
  groupCollapsed: (label: string) => {
    if (shouldLog('log')) {
      console.groupCollapsed(label);
    }
  },
};

// Service Worker logger (no console in SW, use postMessage instead)
export const swLogger = {
  log: (message: string, data?: unknown) => {
    if (isDevelopment()) {
      // @ts-ignore
      self.clients?.matchAll().then((clients: Array<Client>) => {
        clients.forEach((client) => {
          client.postMessage({
            type: 'SW_LOG',
            level: 'log',
            message,
            data,
            timestamp: new Date().toISOString(),
          });
        });
      });
    }
  },
  
  error: (message: string, error?: unknown) => {
    // Always log errors, even in production
    // @ts-ignore
    self.clients?.matchAll().then((clients: Array<Client>) => {
      clients.forEach((client) => {
        client.postMessage({
          type: 'SW_ERROR',
          level: 'error',
          message,
          error: error instanceof Error ? error.message : String(error),
          timestamp: new Date().toISOString(),
        });
      });
    });
  },
};

