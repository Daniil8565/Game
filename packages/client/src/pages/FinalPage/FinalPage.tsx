import React, { useState, useEffect } from 'react'
import { GameMenu } from '../../components/GameMenu'
import styles from './FinalPage.module.scss'
import { Link } from 'react-router-dom'

export const FinalPage: React.FC = () => {
  const [count, setCount] = useState<number>(3)

  return (
    <GameMenu>
      <div className={styles['final-page']}>
        <label className={styles['final-page__label']}>Время вышло!</label>
        <label className={styles['final-page__profit']}>
          Вы успели заработать {count} монет
        </label>
        <Link to="/start-page" className={styles['final-page__restart']}>
          Пройти еще раз
        </Link>
      </div>
    </GameMenu>
  )
}
