import { createContext, ReactNode, useContext, useState } from 'react'
import { GlobalErrorFallback } from './GlobalErrorFallback'

// Контекст ошибки
const ErrorBoundaryContext = createContext<any>(null)

export const ErrorBoundaryProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [error, setError] = useState<Error | null>(null)

  const updateBoundary = (error: Error | null) => {
    setError(error)
  }

  if (error) {
    // Используем GlobalErrorFallback для отображения ошибки
    return (
      <GlobalErrorFallback
        error={error}
        resetErrorBoundary={() => updateBoundary(null)}
      />
    )
  }

  return (
    <ErrorBoundaryContext.Provider
      value={{
        showBoundary: (error: Error) => updateBoundary(error),
        resetBoundary: () => updateBoundary(null),
      }}>
      {children}
    </ErrorBoundaryContext.Provider>
  )
}

// Хук для использования контекста ошибки
export const useErrorBoundaryContext = () => {
  const context = useContext(ErrorBoundaryContext)
  if (!context) {
    throw new Error(
      'useErrorBoundaryContext must be used within an ErrorBoundaryProvider'
    )
  }
  return context
}
