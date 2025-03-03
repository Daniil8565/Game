import React, { useCallback } from 'react'

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
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    event => {
      event.preventDefault()
      onClick()
    },
    [onClick]
  )

  return (
    <button className={styles.button} disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  )
}
