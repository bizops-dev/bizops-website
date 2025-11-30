
import { logger } from './logger';

type WebVitalMetric = {
  name: string;
  value: number;
  id: string;
};

type PerformanceEntry = {
  name?: string;
  value?: number;
  entryType?: string;
};

// Performance monitoring utility using PerformanceObserver
// This helps in auditing Web Vitals (LCP, CLS, FID, INP) in real-time.

export const reportWebVitals = (onPerfEntry?: (metric: WebVitalMetric) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      // Basic observers for core metrics if the browser supports it
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const perfEntry = entry as PerformanceEntry;
          const metricName = perfEntry.name;
          const value = perfEntry.value ?? 0;
          const type = perfEntry.entryType ?? '';
          
          onPerfEntry({
            name: type === 'largest-contentful-paint' ? 'LCP' : 
                  type === 'layout-shift' ? 'CLS' : 
                  type === 'first-input' ? 'FID' : type,
            value,
            id: `v2-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
          });
        }
      });

      observer.observe({ type: 'largest-contentful-paint', buffered: true });
      observer.observe({ type: 'layout-shift', buffered: true });
      observer.observe({ type: 'first-input', buffered: true });
      // observer.observe({ type: 'paint', buffered: true }); // FCP
    } catch (e) {
      // Browser doesn't support PerformanceObserver
      logger.warn("Analytics: PerformanceObserver not supported", e);
    }
  }
};

export const logToConsole = (metric: WebVitalMetric) => {
  // Only log in development mode
  const thresholds: Record<string, number> = {
    LCP: 2500,
    FID: 100,
    CLS: 0.1,
  };

  const name = metric.name;
  const val = metric.value;
  const threshold = thresholds[name] ?? 9999;
  const rating = val <= threshold ? 'Good' : 'Needs Improvement';
  
  logger.groupCollapsed(`[BizOps Performance] ${metric.name}`);
  logger.log(`Value: ${val}`);
  logger.log(`Rating: ${rating}`);
  logger.groupEnd();
};
