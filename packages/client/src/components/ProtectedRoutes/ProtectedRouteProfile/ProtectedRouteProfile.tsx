import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Profile } from '@/pages/ProfilePages/Profile'
import React from 'react'

export const ProtectedRouteProfile: React.FC = () => {
  return (
    <>
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    </>
  )
}
