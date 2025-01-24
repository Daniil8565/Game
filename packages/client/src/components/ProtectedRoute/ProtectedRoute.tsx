import React, { useCallback, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserService } from '@/services/UserService'
import { Loader } from '@/components/Loader'

interface IProtectedRoute {
  children: React.ReactNode
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleSuccess = useCallback(() => {
    setIsAuthenticated(true)
    setIsLoading(false)
  }, [])

  const handleError = useCallback((error: string) => {
    setIsAuthenticated(false)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const userService = new UserService()
    userService.requestData(handleSuccess, handleError).catch(handleError)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  return <>{children}</>
}
