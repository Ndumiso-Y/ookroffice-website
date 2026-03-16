import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-green-700 flex items-center justify-center text-white p-4">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold mb-4">The Village Economy Indaba</h1>
            <p className="text-lg mb-6">
              We're experiencing technical difficulties. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-100"
            >
              Refresh Page
            </button>
            <div className="mt-6">
              <a
                href="https://www.thevillageeconomyindaba.com"
                className="text-green-200 hover:text-white underline"
              >
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;