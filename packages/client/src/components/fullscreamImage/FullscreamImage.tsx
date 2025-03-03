import React from 'react'
import iconFull from '../../image/fullscreen.png'
import iconSmall from '../../image/notfullscreen.png'
import { useFullscreen } from '../../utils/FullscreenAPI'
import styles from './fullscreamImage.module.scss'

export const FullscreamImage = () => {
  const { isFullscreen, toggleFullscreen } = useFullscreen('')
  return (
    <img
      className={styles.iconFullscreen}
      src={isFullscreen ? iconSmall : iconFull}
      alt=""
      onClick={toggleFullscreen}
    />
  )
}
