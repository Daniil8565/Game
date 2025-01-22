import React from 'react'

import styles from './AuthButton.module.scss'

interface IAuthButton {
  text: string
  onClick: () => void
  disabled: boolean
}

export const AuthButton: React.FC<IAuthButton> = ({
  text,
  disabled,
  onClick,
}) => {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  )
}
