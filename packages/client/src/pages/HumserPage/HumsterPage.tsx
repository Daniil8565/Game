import React, { useState, useEffect } from 'react'
import { HumsterController } from './HumsterController'
import styles from './HumsterPage.module.scss'
import { useNavigate } from 'react-router-dom'

interface IHumsterPage {
  setIsGameStarted: (flag: boolean) => void
  setIsGameEnded: (flag: boolean) => void
  setGameCounter: (count: number) => void
  isGameEnded: boolean
}

export const HumsterPage: React.FC<IHumsterPage> = ({
  setIsGameStarted,
  setIsGameEnded,
  setGameCounter,
  isGameEnded,
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(
    Math.round(window.innerHeight * 0.95 - 20)
  )
  const navigate = useNavigate()

  useEffect(() => {
    const controller = new HumsterController(
      width,
      height,
      setIsGameStarted,
      setIsGameEnded,
      setGameCounter
    )
    window.addEventListener('beforeunload', () =>
      window.cancelAnimationFrame(controller.view.animationFrameId as number)
    )
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight * 0.9 - 20)
    })
  }, [])

  // useEffect(() => {
  //   if (isGameEnded) {
  //     setTimeout(() => {
  //       navigate('/game/final-page'); // Переход с задержкой
  //     }, 100); // Задержка 100 мс
  //   }
  // }, [isGameEnded, navigate]);

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
