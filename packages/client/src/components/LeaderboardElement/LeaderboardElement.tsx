import React from 'react'
import styles from './LeaderboardElement.module.scss'

interface LeaderboardElementProps {
  userName: string
  userScore: number
}

export const LeaderboardElement: React.FC<LeaderboardElementProps> = ({
  userName,
  userScore,
}) => {
  return (
    <div className={styles.leaderboardElement}>
      <div>{userName}</div>
      <div>{userScore}</div>
    </div>
  )
}
