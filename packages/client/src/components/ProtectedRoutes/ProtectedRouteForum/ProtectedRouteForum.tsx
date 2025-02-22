import { ProtectedRoute } from '@/components/ProtectedRoute'
import { ForumPage } from '@/pages/ForumPage'
import React from 'react'

export const ProtectedRouteForum: React.FC = () => {
  return (
    <>
      <ProtectedRoute>
        <ForumPage />
      </ProtectedRoute>
    </>
  )
}
