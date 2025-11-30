import React, { ErrorInfo, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { logger } from '../utils/logger';
import { trackError } from '../utils/tracking';
import ErrorPage from '../pages/ErrorPage';

type RouteErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
};

type RouteErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
};

const MAX_RETRY_COUNT = 3;

export class RouteErrorBoundary extends React.Component<
  RouteErrorBoundaryProps,
  RouteErrorBoundaryState
> {
  private navigate: (path: string) => void = () => {};
  private location: string = '';

  constructor(props: RouteErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    };
  }

  public static getDerivedStateFromError(error: Error): Partial<RouteErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props;

    // Log error
    logger.error('Route Error:', error, errorInfo);

    // Track error
    trackError(error, {
      route: this.location,
      component_stack: errorInfo.componentStack,
      retry_count: this.state.retryCount,
    });

    // Report to Sentry
    try {
      Sentry.captureException(error, {
        contexts: {
          react: {
            componentStack: errorInfo.componentStack,
          },
          route: {
            path: this.location,
          },
        },
        tags: {
          errorBoundary: 'route',
          retryCount: this.state.retryCount,
        },
      });
    } catch (sentryError) {
      logger.warn('Sentry error reporting failed:', sentryError);
    }

    // Call custom error handler if provided
    if (onError) {
      onError(error, errorInfo);
    }

    // Store error info for display
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: this.state.retryCount + 1,
    });
  };

  public render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Use the new Premium ErrorPage component
      return (
        <ErrorPage 
          error={this.state.error || new Error('Unknown Error')} 
          resetErrorBoundary={this.handleReset}
        />
      );
    }

    return <RouteErrorBoundaryWrapper boundary={this}>{this.props.children}</RouteErrorBoundaryWrapper>;
  }
}

// Wrapper component to access hooks
const RouteErrorBoundaryWrapper: React.FC<{
  boundary: RouteErrorBoundary;
  children: ReactNode;
}> = ({ boundary, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    // Inject navigate and location into boundary
    (boundary as any).navigate = navigate;
    (boundary as any).location = location.pathname;
  }, [navigate, location, boundary]);

  return <>{children}</>;
};

export default RouteErrorBoundary;

