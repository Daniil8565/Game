import React from 'react'

import styles from './AuthButton.module.scss';

interface IAuthButton {
  text: string,
  onClick: () => void;
}

export const AuthButton: React.FC<IAuthButton> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}
