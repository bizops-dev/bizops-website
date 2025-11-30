/**
 * Environment variable validation and access utilities
 * Provides type-safe access to environment variables with validation
 */

type EnvVar = {
  VITE_SENTRY_DSN?: string;
  VITE_HOTJAR_ID?: string;
  GEMINI_API_KEY?: string;
  VITE_GEMINI_API_KEY?: string;
};

const getEnvVar = (key: string): string | undefined => {
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      return import.meta.env[key];
    }
  } catch {
    // Ignore
  }
  
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env[key];
    }
  } catch {
    // Ignore
  }
  
  return undefined;
};

const getEnvironment = (): 'development' | 'production' | 'test' => {
  try {
    // @ts-ignore
    const mode = import.meta.env?.MODE;
    if (mode === 'development' || mode === 'production' || mode === 'test') {
      return mode;
    }
  } catch {
    // Ignore
  }
  
  try {
    const nodeEnv = process.env?.NODE_ENV;
    if (nodeEnv === 'development' || nodeEnv === 'production' || nodeEnv === 'test') {
      return nodeEnv;
    }
  } catch {
    // Ignore
  }
  
  return 'production';
};

type EnvConfig = {
  sentryDsn?: string;
  hotjarId?: string;
  geminiApiKey?: string;
  environment: 'development' | 'production' | 'test';
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
};

let cachedConfig: EnvConfig | null = null;

/**
 * Get validated environment configuration
 * Caches the result for performance
 */
export const getEnvConfig = (): EnvConfig => {
  if (cachedConfig) {
    return cachedConfig;
  }

  const environment = getEnvironment();
  const sentryDsn = getEnvVar('VITE_SENTRY_DSN') || getEnvVar('REACT_APP_SENTRY_DSN');
  const hotjarId = getEnvVar('VITE_HOTJAR_ID') || getEnvVar('REACT_APP_HOTJAR_ID');
  const geminiApiKey = getEnvVar('GEMINI_API_KEY') || getEnvVar('VITE_GEMINI_API_KEY');

  cachedConfig = {
    sentryDsn,
    hotjarId,
    geminiApiKey,
    environment,
    isDevelopment: environment === 'development',
    isProduction: environment === 'production',
    isTest: environment === 'test',
  };

  return cachedConfig;
};

/**
 * Validate required environment variables
 * Throws error if required vars are missing in production
 */
export const validateEnv = (required: Array<keyof EnvConfig> = []): void => {
  const config = getEnvConfig();
  const missing: Array<string> = [];

  if (required.includes('sentryDsn') && !config.sentryDsn && config.isProduction) {
    missing.push('VITE_SENTRY_DSN or REACT_APP_SENTRY_DSN');
  }

  if (required.includes('geminiApiKey') && !config.geminiApiKey) {
    missing.push('GEMINI_API_KEY or VITE_GEMINI_API_KEY');
  }

  if (missing.length > 0) {
    const errorMessage = `Missing required environment variables: ${missing.join(', ')}`;
    
    if (config.isProduction) {
      throw new Error(errorMessage);
    } else {
      // In development, just warn
      // eslint-disable-next-line no-console
      console.warn(`[Env Validation] ${errorMessage}`);
    }
  }
};

/**
 * Get environment variable with fallback
 */
export const env = (key: string, fallback?: string): string => {
  return getEnvVar(key) || fallback || '';
};

/**
 * Check if running in development
 */
export const isDev = (): boolean => {
  return getEnvConfig().isDevelopment;
};

/**
 * Check if running in production
 */
export const isProd = (): boolean => {
  return getEnvConfig().isProduction;
};

