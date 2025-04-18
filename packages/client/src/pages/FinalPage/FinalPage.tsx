import React, { useState, useEffect, useCallback } from 'react'
import styles from './FinalPage.module.scss'
import { Link } from 'react-router-dom'

interface IFinalPage {
  gameCounter: number
  setIsGameEnded: (flag: boolean) => void
}

export const FinalPage: React.FC<IFinalPage> = ({
  gameCounter,
  setIsGameEnded,
}) => {
  const handleClick = useCallback(() => {
    setIsGameEnded(false)
  }, [])

  return (
    <div className={styles['final-page']}>
      <label className={styles['final-page__label']}>Игра закончена!</label>
      <label className={styles['final-page__profit']}>
        Вы успели заработать {gameCounter} монет
      </label>
      <Link
        onClick={handleClick}
        to="/game"
        className={styles['final-page__restart']}>
        Пройти еще раз
      </Link>
    </div>
  )
}
