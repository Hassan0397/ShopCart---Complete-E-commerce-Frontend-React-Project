import { ErrorBoundary } from 'react-error-boundary';

// eslint-disable-next-line react-refresh/only-export-components
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 bg-red-100 text-red-700 rounded">
      <p>Something went wrong:</p>
      <pre className="mt-2 mb-4">{error.message}</pre>
      <button 
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}

// Wrap your AppRoutes component
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <AppRoutes />
</ErrorBoundary>