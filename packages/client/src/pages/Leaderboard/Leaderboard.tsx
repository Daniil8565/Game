import React from 'react'
import styles from './Leaderboard.module.scss'
import { LeaderboardElement } from '@/components/LeaderboardElement'

export const Leaderboard: React.FC = () => {
  const mockData = [
    { id: 1, userName: 'User 1', userScore: 111 },
    { id: 2, userName: 'User 2', userScore: 222 },
    { id: 3, userName: 'User 3', userScore: 333 },
  ]
  return (
    <div className={styles.leaderboard}>
      <div className={styles.leaderboard__title}>Leaderboard</div>
      <div className={styles.leaderboard__header}>
        <div>Name</div>
        <div>Score</div>
      </div>
      {mockData.map(user => (
        <LeaderboardElement
          key={user.id}
          userName={user.userName}
          userScore={user.userScore}
        />
      ))}
    </div>
  )
}
