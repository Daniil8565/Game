import React, { useState, useEffect } from 'react'
import { HumsterController } from './HumsterController'
import styles from './HumsterPage.module.scss'

export const HumsterPage: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(
    Math.round(window.innerHeight * 0.95 - 20)
  )

  useEffect(() => {
    const controller = new HumsterController(width, height)
    window.addEventListener('beforeunload', () =>
      window.cancelAnimationFrame(controller.view.animationFrameId as number)
    )
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight * 0.9 - 20)
    })
  })

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
