
// Performance monitoring utility using PerformanceObserver
// This helps in auditing Web Vitals (LCP, CLS, FID, INP) in real-time.

export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      // Basic observers for core metrics if the browser supports it
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // @ts-ignore
          const metricName = entry.name;
          // @ts-ignore
          const value = entry.value;
          // @ts-ignore
          const type = entry.entryType;
          
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
      console.warn("BizOps Analytics: PerformanceObserver not supported");
    }
  }
};

export const logToConsole = (metric: any) => {
  // Only log in development mode
  if (process.env.NODE_ENV !== 'development') return;
  
  // Simple logger for development "Audit"
  const thresholds = {
    LCP: 2500,
    FID: 100,
    CLS: 0.1,
  };

  const name = metric.name as keyof typeof thresholds;
  const val = metric.value;
  const rating = val <= (thresholds[name] || 9999) ? 'Good' : 'Needs Improvement';
  
  console.groupCollapsed(`[BizOps Performance] ${metric.name}`);
  console.log(`Value: ${val}`);
  console.log(`Rating: ${rating}`);
  console.groupEnd();
};
