
import React, { ErrorInfo, ReactNode } from "react";
import Button from "./Button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import * as Sentry from "@sentry/react";

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // Report to Sentry if available
    try {
      Sentry.captureException(error, {
        contexts: {
          react: {
            componentStack: errorInfo.componentStack,
          },
        },
        tags: {
          errorBoundary: true,
        },
      });
    } catch (sentryError) {
      // Silently fail if Sentry is not initialized
      if (process.env.NODE_ENV === 'development') {
        console.warn('Sentry error reporting failed:', sentryError);
      }
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-center p-6 transition-colors duration-300">
          <div className="max-w-md w-full bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600 dark:text-red-400 animate-bounce">
              <AlertTriangle className="w-8 h-8" />
            </div>
            
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Something went wrong.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm leading-relaxed">
              We've encountered an unexpected error. Our engineering team has been notified automatically.
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => window.location.reload()}
                fullWidth
                className="flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" /> Reload Application
              </Button>
              <button 
                onClick={() => window.location.href = '/'}
                className="text-sm text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 font-medium transition-colors"
              >
                Return to Homepage
              </button>
            </div>

            {/* DEBUG MODE: Show Error Details */}
            {this.state.error && (
              <div className="mt-8 p-4 bg-slate-100 dark:bg-slate-950 rounded-lg text-left overflow-auto max-h-60 border border-slate-200 dark:border-slate-800 w-full">
                <p className="text-xs font-mono text-red-600 dark:text-red-400 font-bold mb-2 break-words">
                  {this.state.error.toString()}
                </p>
                {this.state.error.stack && (
                  <pre className="text-[10px] font-mono text-slate-500 whitespace-pre-wrap break-all">
                    {this.state.error.stack}
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Lighter Error Boundary for specific sections/widgets
export class SectionErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false, error: null };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
          <AlertTriangle className="w-6 h-6 text-slate-400 mx-auto mb-2" />
          <p className="text-sm text-slate-500 mb-3">Gagal memuat bagian ini.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="text-xs font-bold text-primary-600 hover:underline"
          >
            Coba Lagi
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
