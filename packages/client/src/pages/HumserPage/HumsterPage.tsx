import { API_URL } from '@/constants'
import { getJsonItemFromLocalStorage } from '@/slices/authSlice'
import { Theme, ThemeContext } from '@/theme/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'
import { humster_model, HumsterController } from './HumsterController'
import styles from './HumsterPage.module.scss'

interface IHumsterPage {
  setIsGameStarted: (flag: boolean) => void
  setIsGameEnded: (flag: boolean) => void
  setGameCounter: (count: number) => void
  isGameStarted: boolean
}

export const HumsterPage: React.FC<IHumsterPage> = ({
  setIsGameStarted,
  setIsGameEnded,
  setGameCounter,
  isGameStarted,
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(
    Math.round(window.innerHeight * 0.95 - 20)
  )

  const sendScore = (): void => {
    fetch(`${API_URL}/leaderboard`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          id: getJsonItemFromLocalStorage('user').id as number,
          hamsterScore: humster_model.counter as number,
          userName: getJsonItemFromLocalStorage('user').first_name as string,
        },
        ratingFieldName: 'hamsterScore',
      }),
    })
      .then(response => response)
      .catch(error => console.error('Ошибка:', error))
  }

  const { theme } = useContext(ThemeContext)
  console.log('Theme in HumsterPage:', theme)
  if (!theme) {
    return <div>Тема не загружена. Пожалуйста, обновите страницу.</div>
  }
  useEffect(() => {
    const controller = new HumsterController(width, height, theme as Theme)
    if (isGameStarted) {
      setTimeout(() => {
        setIsGameStarted(false)
        setIsGameEnded(true)
        setGameCounter(humster_model.counter)
        sendScore()
      }, 30000) // Задержка 30 сек
    }
    window.addEventListener('beforeunload', () =>
      window.cancelAnimationFrame(controller.view.animationFrameId as number)
    )
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight * 0.9 - 20)
    })
  }, [])

  return (
    <>
      <canvas
        id="canvas"
        width={width}
        height={height}
        className={styles.humster_canvas}
      />
    </>
  )
}
