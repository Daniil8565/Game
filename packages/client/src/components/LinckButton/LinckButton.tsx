import React from 'react'

import styles from './LinckButton.module.scss'

interface LinckButton {
  text: string
  onClick: () => void
}

export const LinckButton: React.FC<LinckButton> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}
