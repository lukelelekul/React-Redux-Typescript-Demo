import { Component, ErrorInfo, ReactNode } from 'react';

import ErrorPage from './ErrorPage';

interface IErrorBoundaryProps {
  readonly children: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  state: IErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): IErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(error);
    console.log(info);
    try {
      // fixme send error to server.
    } catch (e) {
      console.error('Error Boundary Error', e);
    }
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorPage />;
    }
    return children;
  }
}

export default ErrorBoundary;
