
import { 
  WebTracerProvider, 
  ConsoleSpanExporter, 
  SimpleSpanProcessor,
  BatchSpanProcessor 
} from '@opentelemetry/sdk-trace-web';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { trace, context, Span, SpanStatusCode } from '@opentelemetry/api';
import { logger } from './logger';
import { getEnvConfig } from './env';

// --- Configuration ---
const SERVICE_NAME = 'bizops-frontend-v1';

// Singleton reference
let provider: WebTracerProvider | null = null;

/**
 * Initialize OpenTelemetry
 * Sets up the provider, exporters, and auto-instrumentation for Fetch.
 */
export const initTelemetry = () => {
  if (provider) return; // Prevent double init

  try {
    const envConfig = getEnvConfig();
    
    // 1. Create Provider with Service Resource
    provider = new WebTracerProvider({
      resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: SERVICE_NAME,
        [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: envConfig.environment,
        'browser.platform': typeof navigator !== 'undefined' ? navigator.platform : 'unknown',
        'browser.user_agent': typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      }),
    });

    // 2. Configure Exporter
    // In production, this would be OTLPTraceExporter pointing to Jaeger/Tempo
    // For this demo, we use ConsoleSpanExporter to show traces in DevTools
    const consoleExporter = new ConsoleSpanExporter();
    
    // Use SimpleSpanProcessor for Dev (immediate), Batch for Prod
    provider.addSpanProcessor(new SimpleSpanProcessor(consoleExporter));

    // 3. Register Provider
    provider.register();

    // 4. Auto-Instrument Network Requests (Fetch Monkey Patch)
    instrumentFetch();

    logger.info(`Telemetry: OTel Initialized for ${SERVICE_NAME}`);
  } catch (e) {
    // Always log errors, but use proper error reporting in production
    logger.error('Telemetry: Failed to init', e);
  }
};

/**
 * Monkey Patch window.fetch to automatically create spans for API calls.
 * This ensures full visibility into downstream dependencies.
 * Wrapped in try-catch to prevent crashes in restrictive environments (e.g. some sandboxes).
 */
const instrumentFetch = () => {
  if (typeof window === 'undefined' || !window.fetch) return;

  try {
    const originalFetch = window.fetch;
    
    type FetchArgs = [RequestInfo | URL, RequestInit?];
    
    const wrappedFetch = async (...args: FetchArgs): Promise<Response> => {
      const url = args[0] ? args[0].toString() : 'unknown';
      // Skip telemetry requests to avoid loops (if we had a real collector)
      if (url.includes('/v1/traces')) {
        return originalFetch(...args);
      }

      const tracer = trace.getTracer('bizops-network-instrumentation');
      const method = args[1]?.method || 'GET';
      
      return tracer.startActiveSpan(`HTTP ${method} ${url}`, async (span) => {
        try {
          // Add Request Attributes
          span.setAttribute('http.url', url);
          span.setAttribute('http.method', method);
          span.setAttribute('component', 'http-client');

          const response = await originalFetch(...args);

          // Add Response Attributes
          span.setAttribute('http.status_code', response.status);
          
          if (!response.ok) {
            span.setStatus({ code: SpanStatusCode.ERROR, message: response.statusText });
            span.setAttribute('error', true);
          } else {
            span.setStatus({ code: SpanStatusCode.OK });
          }

          return response;
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          span.setStatus({ code: SpanStatusCode.ERROR, message: errorMessage });
          if (error instanceof Error) {
            span.recordException(error);
          }
          throw error;
        } finally {
          span.end();
        }
      });
    };

    // Attempt to overwrite fetch
    // In some environments, this property is read-only.
    window.fetch = wrappedFetch as typeof window.fetch;
  } catch (e) {
    logger.warn('Telemetry: Could not auto-instrument window.fetch (likely read-only)', e);
  }
};

type SpanAttributes = Record<string, string | number | boolean>;

/**
 * Start a manual span for critical user actions (e.g., "Checkout", "Submit Lead").
 * Useful for Funnel Analysis.
 */
export const startSpan = (name: string, attributes: SpanAttributes = {}): Span => {
  const tracer = trace.getTracer('bizops-user-interaction');
  const span = tracer.startSpan(name);
  Object.entries(attributes).forEach(([key, val]) => {
    span.setAttribute(key, String(val));
  });
  return span;
};

/**
 * Helper to wrap a function execution in a span.
 */
export const traceAction = async <T>(
  name: string, 
  action: () => Promise<T>, 
  attributes: SpanAttributes = {}
): Promise<T> => {
  const tracer = trace.getTracer('bizops-action');
  return tracer.startActiveSpan(name, async (span) => {
    try {
      Object.entries(attributes).forEach(([k, v]) => span.setAttribute(k, String(v)));
      const result = await action();
      span.setStatus({ code: SpanStatusCode.OK });
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      span.setStatus({ code: SpanStatusCode.ERROR, message: errorMessage });
      if (err instanceof Error) {
        span.recordException(err);
      }
      throw err;
    } finally {
      span.end();
    }
  });
};
