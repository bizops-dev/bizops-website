/**
 * Third-Party Integrations Manager
 * Centralized initialization for all marketing, analytics, and monitoring tools
 * All tools are configured via environment variables
 */

import { logger } from './logger';
import { getEnvConfig } from './env';

// Type definitions for window extensions
declare global {
  interface Window {
    gtag?: (...args: Array<any>) => void;
    dataLayer?: Array<any>;
    fbq?: (...args: Array<any>) => void;
    _fbq?: (...args: Array<any>) => void;
    mixpanel?: any;
    amplitude?: any;
    analytics?: any; // Segment
    heap?: any;
    hj?: (...args: Array<any>) => void;
    clarity?: (...args: Array<any>) => void;
    Intercom?: (...args: Array<any>) => void;
    $crisp?: Array<any>;
    CRISP_WEBSITE_ID?: string;
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
    drift?: any;
    zE?: (...args: Array<any>) => void;
    lintrk?: (...args: Array<any>) => void;
    twq?: (...args: Array<any>) => void;
    ttq?: any;
    rdt?: (...args: Array<any>) => void;
    optimizely?: any;
    VWO?: any;
    LogRocket?: any;
    DD_RUM?: any;
  }
}

type IntegrationConfig = {
  ga4?: string;
  gtm?: string;
  mixpanel?: string;
  amplitude?: string;
  segment?: string;
  heap?: string;
  hotjar?: string;
  clarity?: string;
  metaPixel?: string;
  linkedIn?: string;
  twitter?: string;
  tiktok?: string;
  reddit?: string;
  intercom?: string;
  crisp?: string;
  tawk?: { propertyId: string; widgetId: string };
  drift?: string;
  zendesk?: string;
  logrocket?: string;
  datadog?: { applicationId: string; clientToken: string; site: string };
  googleSiteVerification?: string;
  bingSiteVerification?: string;
};

/**
 * Get all integration configurations from environment variables
 */
export const getIntegrationConfig = (): IntegrationConfig => {
  const env = (key: string): string | undefined => {
    try {
      // @ts-ignore
      return import.meta.env[key] as string | undefined;
    } catch {
      return undefined;
    }
  };

  return {
    ga4: env('VITE_GA4_MEASUREMENT_ID'),
    gtm: env('VITE_GTM_CONTAINER_ID'),
    mixpanel: env('VITE_MIXPANEL_TOKEN'),
    amplitude: env('VITE_AMPLITUDE_API_KEY'),
    segment: env('VITE_SEGMENT_WRITE_KEY'),
    heap: env('VITE_HEAP_APP_ID'),
    hotjar: env('VITE_HOTJAR_ID'),
    clarity: env('VITE_CLARITY_PROJECT_ID'),
    metaPixel: env('VITE_META_PIXEL_ID'),
    linkedIn: env('VITE_LINKEDIN_PARTNER_ID'),
    twitter: env('VITE_TWITTER_PIXEL_ID'),
    tiktok: env('VITE_TIKTOK_PIXEL_ID'),
    reddit: env('VITE_REDDIT_PIXEL_ID'),
    intercom: env('VITE_INTERCOM_APP_ID'),
    crisp: env('VITE_CRISP_WEBSITE_ID'),
    tawk: env('VITE_TAWK_PROPERTY_ID') && env('VITE_TAWK_WIDGET_ID')
      ? { propertyId: env('VITE_TAWK_PROPERTY_ID')!, widgetId: env('VITE_TAWK_WIDGET_ID')! }
      : undefined,
    drift: env('VITE_DRIFT_APP_ID'),
    zendesk: env('VITE_ZENDESK_KEY'),
    logrocket: env('VITE_LOGROCKET_APP_ID'),
    datadog: env('VITE_DATADOG_APPLICATION_ID') && env('VITE_DATADOG_CLIENT_TOKEN')
      ? {
          applicationId: env('VITE_DATADOG_APPLICATION_ID')!,
          clientToken: env('VITE_DATADOG_CLIENT_TOKEN')!,
          site: env('VITE_DATADOG_SITE') || 'datadoghq.com',
        }
      : undefined,
    googleSiteVerification: env('VITE_GOOGLE_SITE_VERIFICATION'),
    bingSiteVerification: env('VITE_BING_SITE_VERIFICATION'),
  };
};

/**
 * Initialize Google Analytics 4 (GA4)
 */
export const initGA4 = (measurementId: string): void => {
  try {
    // Load gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: Array<any>) {
      window.dataLayer!.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      send_page_view: true,
      anonymize_ip: true,
    });

    logger.info('✅ GA4 initialized:', measurementId);
  } catch (error) {
    logger.error('❌ GA4 initialization failed:', error);
  }
};

/**
 * Initialize Google Tag Manager (GTM)
 */
export const initGTM = (containerId: string): void => {
  try {
    // GTM snippet
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s) as HTMLScriptElement;
      const dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode!.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', containerId);

    logger.info('✅ GTM initialized:', containerId);
  } catch (error) {
    logger.error('❌ GTM initialization failed:', error);
  }
};

/**
 * Initialize Meta/Facebook Pixel
 */
export const initMetaPixel = (pixelId: string): void => {
  try {
    !(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function (...args: Array<any>) {
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq!('init', pixelId);
    window.fbq!('track', 'PageView');

    logger.info('✅ Meta Pixel initialized:', pixelId);
  } catch (error) {
    logger.error('❌ Meta Pixel initialization failed:', error);
  }
};

/**
 * Initialize LinkedIn Insight Tag
 */
export const initLinkedInInsight = (partnerId: string): void => {
  try {
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(partnerId);

    (function (l: any) {
      if (!l) {
        window.lintrk = function (a: any, b: any) {
          window.lintrk.q.push([a, b]);
        };
        window.lintrk.q = [];
      }
      const s = document.getElementsByTagName('script')[0];
      const b = document.createElement('script');
      b.type = 'text/javascript';
      b.async = true;
      b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
      s.parentNode!.insertBefore(b, s);
    })(window.lintrk);

    logger.info('✅ LinkedIn Insight Tag initialized:', partnerId);
  } catch (error) {
    logger.error('❌ LinkedIn Insight Tag initialization failed:', error);
  }
};

/**
 * Initialize Hotjar
 */
export const initHotjar = (hjid: string, hjsv: string = '6'): void => {
  try {
    (function (h: any, o: any, t: any, j: any, a?: any, r?: any) {
      h.hj =
        h.hj ||
        function (...args: Array<any>) {
          (h.hj.q = h.hj.q || []).push(args);
        };
      h._hjSettings = { hjid, hjsv };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

    logger.info('✅ Hotjar initialized:', hjid);
  } catch (error) {
    logger.error('❌ Hotjar initialization failed:', error);
  }
};

/**
 * Initialize Microsoft Clarity
 */
export const initClarity = (projectId: string): void => {
  try {
    (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
      c[a] =
        c[a] ||
        function (...args: Array<any>) {
          (c[a].q = c[a].q || []).push(args);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', projectId);

    logger.info('✅ Microsoft Clarity initialized:', projectId);
  } catch (error) {
    logger.error('❌ Microsoft Clarity initialization failed:', error);
  }
};

/**
 * Initialize Intercom
 */
export const initIntercom = (appId: string): void => {
  try {
    (function () {
      const w = window;
      const ic = w.Intercom;
      if (typeof ic === 'function') {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        const d = document;
        const i: any = function (...args: Array<any>) {
          i.c(args);
        };
        i.q = [];
        i.c = function (args: any) {
          i.q.push(args);
        };
        w.Intercom = i;
        const l = function () {
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = `https://widget.intercom.io/widget/${appId}`;
          const x = d.getElementsByTagName('script')[0];
          x.parentNode!.insertBefore(s, x);
        };
        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();

    window.Intercom!('boot', { app_id: appId });

    logger.info('✅ Intercom initialized:', appId);
  } catch (error) {
    logger.error('❌ Intercom initialization failed:', error);
  }
};

/**
 * Initialize Crisp Chat
 */
export const initCrisp = (websiteId: string): void => {
  try {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = websiteId;

    (function () {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://client.crisp.chat/l.js';
      s.async = true;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();

    logger.info('✅ Crisp Chat initialized:', websiteId);
  } catch (error) {
    logger.error('❌ Crisp Chat initialization failed:', error);
  }
};

/**
 * Initialize Tawk.to
 */
export const initTawk = (propertyId: string, widgetId: string): void => {
  try {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    (function () {
      const s1 = document.createElement('script');
      const s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode!.insertBefore(s1, s0);
    })();

    logger.info('✅ Tawk.to initialized:', propertyId);
  } catch (error) {
    logger.error('❌ Tawk.to initialization failed:', error);
  }
};

/**
 * Initialize LogRocket
 * Note: Requires 'logrocket' package to be installed: npm install logrocket
 * Uncomment the code below after installing the package
 */
export const initLogRocket = async (appId: string): Promise<void> => {
  logger.warn('⚠️ LogRocket not enabled. Install package: npm install logrocket');
  
  // Uncomment after installing logrocket:
  // try {
  //   const LogRocket = await import('logrocket');
  //   LogRocket.default.init(appId);
  //   logger.info('✅ LogRocket initialized:', appId);
  // } catch (error) {
  //   logger.error('❌ LogRocket initialization failed:', error);
  // }
};

/**
 * Initialize Datadog RUM
 */
export const initDatadog = (config: { applicationId: string; clientToken: string; site: string }): void => {
  try {
    (function (h: any, o: any, u: any, n: any, d: any) {
      h = h[d] = h[d] || {
        q: [],
        onReady: function (c: any) {
          h.q.push(c);
        },
      };
      d = o.createElement(u);
      d.async = 1;
      d.src = n;
      n = o.getElementsByTagName(u)[0];
      n.parentNode.insertBefore(d, n);
    })(window, document, 'script', 'https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js', 'DD_RUM');

    window.DD_RUM!.onReady(function () {
      window.DD_RUM!.init({
        clientToken: config.clientToken,
        applicationId: config.applicationId,
        site: config.site,
        service: 'bizops-website',
        env: import.meta.env.MODE,
        version: '1.0.0',
        sessionSampleRate: 100,
        sessionReplaySampleRate: 20,
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: 'mask-user-input',
      });
    });

    logger.info('✅ Datadog RUM initialized');
  } catch (error) {
    logger.error('❌ Datadog RUM initialization failed:', error);
  }
};

/**
 * Initialize all configured integrations
 */
export const initAllIntegrations = (): void => {
  const config = getIntegrationConfig();
  const envConfig = getEnvConfig();

  // Only initialize in production or when explicitly enabled
  if (!envConfig.isProduction && !import.meta.env.VITE_ENABLE_INTEGRATIONS) {
    logger.info('🔧 Integrations disabled in development mode');
    return;
  }

  logger.info('🚀 Initializing integrations...');

  // Analytics
  if (config.ga4) initGA4(config.ga4);
  if (config.gtm) initGTM(config.gtm);

  // Heatmaps & Session Recording
  if (config.hotjar) initHotjar(config.hotjar);
  if (config.clarity) initClarity(config.clarity);

  // Marketing Pixels
  if (config.metaPixel) initMetaPixel(config.metaPixel);
  if (config.linkedIn) initLinkedInInsight(config.linkedIn);

  // Chat & Support
  if (config.intercom) initIntercom(config.intercom);
  if (config.crisp) initCrisp(config.crisp);
  if (config.tawk) initTawk(config.tawk.propertyId, config.tawk.widgetId);

  // Monitoring (optional - requires additional packages)
  if (config.logrocket) {
    initLogRocket(config.logrocket).catch(() => {
      logger.debug('LogRocket initialization skipped (package not installed)');
    });
  }
  if (config.datadog) initDatadog(config.datadog);

  logger.info('✅ All integrations initialized');
};

/**
 * Track conversion event across all platforms
 */
export const trackConversionEvent = (eventName: string, value?: number, currency: string = 'IDR'): void => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      event_name: eventName,
      value: value,
      currency: currency,
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', 'Lead', { value: value, currency: currency });
  }

  // LinkedIn
  if (window.lintrk) {
    window.lintrk('track', { conversion_id: eventName });
  }

  logger.debug('Conversion tracked:', eventName, value);
};

