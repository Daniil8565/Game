import { ProtectedRoute } from '@/components/ProtectedRoute'
import { ChangePassword } from '@/pages/ProfilePages/ChangePassword'
import React from 'react'

export const ProtectedRouteEditPassword: React.FC = () => {
  return (
    <>
      <ProtectedRoute>
        <ChangePassword />
      </ProtectedRoute>
    </>
  )
}
