import React, { useEffect, useState } from 'react'
import styles from './Leaderboard.module.scss'
import { LeaderboardElement } from '@/components/LeaderboardElement'
import { GameMenu } from '@/components/GameMenu'
import { API_URL } from '@/constants'

export const Leaderboard: React.FC = () => {
  type LeaderboardUser = {
    data: {
      id: number
      userName: string
      hamsterScore: number
    }
  }
  const [scoreData, setScoreData] = useState<LeaderboardUser[]>([])
  const [cursor, setCursor] = useState(0)
  const limit = 8
  const goNextPage = () => {
    setCursor(cursor + limit)
  }
  const goPrevPage = () => {
    setCursor(cursor - limit)
  }
  const fetchLeaderboard = (cursor: number) => {
    fetch(`${API_URL}/leaderboard/all`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ratingFieldName: 'hamsterScore',
        cursor,
        limit,
      }),
    })
      .then(response => response.json())
      .then((res: LeaderboardUser[]) => setScoreData(res))
      .catch(error => console.error('Ошибка:', error))
  }

  useEffect(() => {
    fetchLeaderboard(cursor)
  }, [cursor])

  return (
    <GameMenu>
      <div className={styles.leaderboard}>
        <div className={styles.leaderboard__title}>Leaderboard</div>
        <div className={styles.leaderboard__header}>
          <div>Name</div>
          <div>Score</div>
        </div>
        {scoreData.map(user => (
          <LeaderboardElement
            key={user.data.id}
            userName={user.data.userName}
            userScore={user.data.hamsterScore}
          />
        ))}
        <div className={styles.leaderboard__pagination}>
          <button onClick={goPrevPage} disabled={cursor === 0}>
            Назад
          </button>
          <button onClick={goNextPage} disabled={scoreData.length < limit}>
            Вперед
          </button>
        </div>
      </div>
    </GameMenu>
  )
}
