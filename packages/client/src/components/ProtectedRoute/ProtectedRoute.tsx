import { Loader } from '@/components/Loader'
import { UserService } from '@/services/UserService'
import { RootState } from '@/store/store'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface IProtectedRoute {
  children: React.ReactNode
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const user = useSelector((state: RootState) => state.auth.user)

  const handleSuccess = useCallback(() => {
    setIsAuthenticated(true)
    setIsLoading(false)
  }, [])

  const handleError = useCallback(() => {
    setIsAuthenticated(false)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (user) {
      handleSuccess()
    } else {
      const userService = new UserService()
      userService.getCurrentUser().then(handleSuccess).catch(handleError)
    }
  }, [handleSuccess, handleError])

  if (isLoading) {
    return <Loader />
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  return <>{children}</>
}
