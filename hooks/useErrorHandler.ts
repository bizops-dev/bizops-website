import { useCallback } from 'react';
import { logger } from '../utils/logger';
import { trackError } from '../utils/tracking';
import * as Sentry from '@sentry/react';

type ErrorContext = {
  component?: string;
  action?: string;
  userId?: string;
  [key: string]: string | number | boolean | null | undefined;
};

/**
 * Custom hook for handling errors with automatic reporting
 * 
 * @example
 * const handleError = useErrorHandler();
 * 
 * try {
 *   await riskyOperation();
 * } catch (error) {
 *   handleError(error, { component: 'MyComponent', action: 'fetchData' });
 * }
 */
export const useErrorHandler = () => {
  const handleError = useCallback((error: Error | unknown, context?: ErrorContext) => {
    const errorObj = error instanceof Error ? error : new Error(String(error));

    // Log error
    logger.error('Error caught:', errorObj, context);

    // Track error
    if (context) {
      trackError(errorObj, context);
    } else {
      trackError(errorObj);
    }

    // Report to Sentry
    try {
      Sentry.captureException(errorObj, {
        contexts: {
          custom: context || {},
        },
        tags: {
          errorHandler: true,
        },
      });
    } catch (sentryError) {
      logger.warn('Sentry error reporting failed:', sentryError);
    }
  }, []);

  return handleError;
};

/**
 * Hook for async error handling with retry logic
 */
export const useAsyncErrorHandler = () => {
  const handleError = useErrorHandler();

  const executeWithRetry = useCallback(
    async <T>(
      fn: () => Promise<T>,
      options: {
        maxRetries?: number;
        retryDelay?: number;
        onRetry?: (attempt: number) => void;
        context?: ErrorContext;
      } = {}
    ): Promise<T> => {
      const { maxRetries = 3, retryDelay = 1000, onRetry, context } = options;
      let lastError: Error | null = null;

      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          return await fn();
        } catch (error) {
          lastError = error instanceof Error ? error : new Error(String(error));

          if (attempt < maxRetries) {
            if (onRetry) {
              onRetry(attempt + 1);
            }
            await new Promise((resolve) => setTimeout(resolve, retryDelay * (attempt + 1)));
            continue;
          }

          // Max retries reached
          handleError(lastError, {
            ...context,
            maxRetries,
            finalAttempt: attempt + 1,
          });
          throw lastError;
        }
      }

      throw lastError || new Error('Unknown error');
    },
    [handleError]
  );

  return { executeWithRetry, handleError };
};

