import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './StartPage.module.scss'

export default function StartPage() {
  const [count, setCount] = useState<number>(3)
  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount(prevCount => prevCount - 1)
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [count])
  return (
    <div className={styles['start-page']}>
      <div className={styles['start-page__button']}>
        {count > 0 ? (
          <span className={styles['button-text']}>{count}</span>
        ) : (
          <Link to="/some-page" className={styles['button-text']}>
            СТАРТ
          </Link>
        )}
      </div>
    </div>
  )
}
