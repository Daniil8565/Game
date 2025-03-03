import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Leaderboard } from '@/pages/Leaderboard'
import React from 'react'

export const ProtectedRouteLeaderboard: React.FC = () => {
  return (
    <>
      <ProtectedRoute>
        <Leaderboard />
      </ProtectedRoute>
    </>
  )
}
