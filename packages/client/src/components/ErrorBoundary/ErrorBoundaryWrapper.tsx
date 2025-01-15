import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { GlobalErrorFallback } from './GlobalErrorFallback'

type ErrorBoundaryWrapperProps = {
  children: React.ReactNode
}

export const ErrorBoundaryWrapper = ({
  children,
}: ErrorBoundaryWrapperProps) => (
  <ErrorBoundary
    FallbackComponent={GlobalErrorFallback}
    onError={(error, info) => {
      console.error('Caught an error:', error, info)
    }}>
    {children}
  </ErrorBoundary>
)
