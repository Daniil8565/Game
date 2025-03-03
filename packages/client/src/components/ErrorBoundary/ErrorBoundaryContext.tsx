import { createContext, ReactNode, useContext, useState } from 'react'
import { GlobalErrorFallback } from './GlobalErrorFallback'

// Типы для контекста
interface ErrorBoundaryContextType {
  showBoundary: (error: Error, info: any) => void
  resetBoundary: () => void
}

const ErrorBoundaryContext = createContext<
  ErrorBoundaryContextType | undefined
>(undefined)

const ErrorBoundaryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<Error | null>(null)

  const showBoundary = (error: Error, info: any) => {
    setError(error)
    console.error('Error Info:', info)
  }

  const resetBoundary = () => {
    setError(null)
  }

  if (error) {
    return (
      <GlobalErrorFallback error={error} resetErrorBoundary={resetBoundary} />
    )
  }

  return (
    <ErrorBoundaryContext.Provider value={{ showBoundary, resetBoundary }}>
      {children}
    </ErrorBoundaryContext.Provider>
  )
}

// Хук для использования контекста ошибки
const useErrorBoundaryContext = (): ErrorBoundaryContextType => {
  const context = useContext(ErrorBoundaryContext)
  if (!context) {
    throw new Error(
      'useErrorBoundaryContext must be used within an ErrorBoundaryProvider'
    )
  }
  return context
}

export { ErrorBoundaryProvider, useErrorBoundaryContext }
