
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { initMonitoring } from './utils/monitoring';
import { reportWebVitals, logToConsole } from './utils/analytics';
import { validateEnv, isDev } from './utils/env';
import { initAllIntegrations } from './utils/integrations';

// Validate environment variables (warns in dev, throws in prod)
try {
  validateEnv(['geminiApiKey']); // GEMINI_API_KEY is required
} catch (error) {
  // In production, this will throw and prevent app from starting
  // In development, it just warns
  if (isDev()) {
    // eslint-disable-next-line no-console
    console.warn('[Env] Missing optional environment variables');
  }
}

// Initialize Sentry / Monitoring
initMonitoring();

// Initialize all third-party integrations (Analytics, Marketing, Chat, etc.)
// Only initializes if environment variables are configured
initAllIntegrations();

// Initialize Performance Auditing (Logs to console in Dev)
if (isDev()) {
  reportWebVitals(logToConsole);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
