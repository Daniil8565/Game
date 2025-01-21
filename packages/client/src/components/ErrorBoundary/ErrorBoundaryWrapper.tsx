import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { GlobalErrorFallback } from './GlobalErrorFallback'

type ErrorBoundaryWrapperProps = {
  children: React.ReactNode
}

const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({
  children,
}) => (
  <ErrorBoundary
    FallbackComponent={GlobalErrorFallback}
    onError={(error, info) => {
      console.error('Caught an error:', error, info)
    }}>
    {children}
  </ErrorBoundary>
)

export { ErrorBoundaryWrapper }
