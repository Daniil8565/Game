import React, { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './StartPage.module.scss'

interface IStartPage {
  setIsGameStarted: (flag: boolean) => void
}

export const StartPage: React.FC<IStartPage> = ({ setIsGameStarted }) => {
  useEffect(() => {
    setIsGameStarted(false)
  }, [])

  const handleClick = useCallback(() => {
    setIsGameStarted(true)
  }, [])

  return (
    <div className={styles['start-page']}>
      <div className={styles['start-page__button']}>
        <Link
          onClick={handleClick}
          to="/game"
          className={styles['button-text']}>
          СТАРТ
        </Link>
      </div>
    </div>
  )
}
