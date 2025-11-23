
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { initMonitoring } from './utils/monitoring';
import { reportWebVitals, logToConsole } from './utils/analytics';

// Initialize Sentry / Monitoring
initMonitoring();

// Initialize Performance Auditing (Logs to console in Dev)
if (process.env.NODE_ENV !== 'production') {
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
