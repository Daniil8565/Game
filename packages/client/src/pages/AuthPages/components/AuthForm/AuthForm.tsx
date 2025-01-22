import React from 'react'

import styles from './AuthForm.module.scss'

interface IAuthForm {
  children?: React.ReactNode
}

export const AuthForm: React.FC<IAuthForm> = ({ children }) => (
  <div className={styles.form}>{children}</div>
)
