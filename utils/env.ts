/**
 * Environment variable validation and access utilities
 * Provides type-safe access to environment variables with validation
 */

type EnvVar = {
  // Monitoring
  VITE_SENTRY_DSN?: string;
  VITE_LOGROCKET_APP_ID?: string;
  VITE_DATADOG_APPLICATION_ID?: string;
  VITE_DATADOG_CLIENT_TOKEN?: string;
  
  // Analytics
  VITE_GA4_MEASUREMENT_ID?: string;
  VITE_GTM_CONTAINER_ID?: string;
  VITE_MIXPANEL_TOKEN?: string;
  VITE_AMPLITUDE_API_KEY?: string;
  VITE_SEGMENT_WRITE_KEY?: string;
  VITE_HEAP_APP_ID?: string;
  VITE_HOTJAR_ID?: string;
  VITE_CLARITY_PROJECT_ID?: string;
  
  // Marketing
  VITE_META_PIXEL_ID?: string;
  VITE_LINKEDIN_PARTNER_ID?: string;
  VITE_TWITTER_PIXEL_ID?: string;
  VITE_TIKTOK_PIXEL_ID?: string;
  
  // Chat & Support
  VITE_INTERCOM_APP_ID?: string;
  VITE_CRISP_WEBSITE_ID?: string;
  VITE_TAWK_PROPERTY_ID?: string;
  VITE_TAWK_WIDGET_ID?: string;
  VITE_DRIFT_APP_ID?: string;
  VITE_ZENDESK_KEY?: string;
  
  // SEO
  VITE_SITE_URL?: string;
  VITE_GOOGLE_SITE_VERIFICATION?: string;
  VITE_BING_SITE_VERIFICATION?: string;
  
  // AI
  GEMINI_API_KEY?: string;
  VITE_GEMINI_API_KEY?: string;
  VITE_OPENAI_API_KEY?: string;
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
  // Monitoring
  sentryDsn?: string;
  logrocketAppId?: string;
  datadogApplicationId?: string;
  datadogClientToken?: string;
  
  // Analytics
  ga4MeasurementId?: string;
  gtmContainerId?: string;
  mixpanelToken?: string;
  amplitudeApiKey?: string;
  segmentWriteKey?: string;
  heapAppId?: string;
  hotjarId?: string;
  clarityProjectId?: string;
  
  // Marketing
  metaPixelId?: string;
  linkedInPartnerId?: string;
  twitterPixelId?: string;
  tiktokPixelId?: string;
  
  // Chat & Support
  intercomAppId?: string;
  crispWebsiteId?: string;
  tawkPropertyId?: string;
  tawkWidgetId?: string;
  driftAppId?: string;
  zendeskKey?: string;
  
  // SEO
  siteUrl?: string;
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  
  // AI
  geminiApiKey?: string;
  openaiApiKey?: string;
  
  // Environment
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
  
  cachedConfig = {
    // Monitoring
    sentryDsn: getEnvVar('VITE_SENTRY_DSN') || getEnvVar('REACT_APP_SENTRY_DSN'),
    logrocketAppId: getEnvVar('VITE_LOGROCKET_APP_ID'),
    datadogApplicationId: getEnvVar('VITE_DATADOG_APPLICATION_ID'),
    datadogClientToken: getEnvVar('VITE_DATADOG_CLIENT_TOKEN'),
    
    // Analytics
    ga4MeasurementId: getEnvVar('VITE_GA4_MEASUREMENT_ID'),
    gtmContainerId: getEnvVar('VITE_GTM_CONTAINER_ID'),
    mixpanelToken: getEnvVar('VITE_MIXPANEL_TOKEN'),
    amplitudeApiKey: getEnvVar('VITE_AMPLITUDE_API_KEY'),
    segmentWriteKey: getEnvVar('VITE_SEGMENT_WRITE_KEY'),
    heapAppId: getEnvVar('VITE_HEAP_APP_ID'),
    hotjarId: getEnvVar('VITE_HOTJAR_ID') || getEnvVar('REACT_APP_HOTJAR_ID'),
    clarityProjectId: getEnvVar('VITE_CLARITY_PROJECT_ID'),
    
    // Marketing
    metaPixelId: getEnvVar('VITE_META_PIXEL_ID'),
    linkedInPartnerId: getEnvVar('VITE_LINKEDIN_PARTNER_ID'),
    twitterPixelId: getEnvVar('VITE_TWITTER_PIXEL_ID'),
    tiktokPixelId: getEnvVar('VITE_TIKTOK_PIXEL_ID'),
    
    // Chat & Support
    intercomAppId: getEnvVar('VITE_INTERCOM_APP_ID'),
    crispWebsiteId: getEnvVar('VITE_CRISP_WEBSITE_ID'),
    tawkPropertyId: getEnvVar('VITE_TAWK_PROPERTY_ID'),
    tawkWidgetId: getEnvVar('VITE_TAWK_WIDGET_ID'),
    driftAppId: getEnvVar('VITE_DRIFT_APP_ID'),
    zendeskKey: getEnvVar('VITE_ZENDESK_KEY'),
    
    // SEO
    siteUrl: getEnvVar('VITE_SITE_URL') || 'https://bizops.id',
    googleSiteVerification: getEnvVar('VITE_GOOGLE_SITE_VERIFICATION'),
    bingSiteVerification: getEnvVar('VITE_BING_SITE_VERIFICATION'),
    
    // AI
    geminiApiKey: getEnvVar('GEMINI_API_KEY') || getEnvVar('VITE_GEMINI_API_KEY'),
    openaiApiKey: getEnvVar('VITE_OPENAI_API_KEY'),
    
    // Environment
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

