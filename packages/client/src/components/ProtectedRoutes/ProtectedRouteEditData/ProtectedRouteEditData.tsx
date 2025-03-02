import { ProtectedRoute } from '@/components/ProtectedRoute'
import { ChangeData } from '@/pages/ProfilePages/ChangeData'
import React from 'react'

export const ProtectedRouteEditData: React.FC = () => {
  return (
    <>
      <ProtectedRoute>
        <ChangeData />
      </ProtectedRoute>
    </>
  )
}
