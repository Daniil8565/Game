import React from 'react'

import styles from './AuthForm.module.scss'

interface IAuthForm {
  children?: React.ReactNode
}

export const AuthForm: React.FC<IAuthForm> = ({ children }) => (
  <form className={styles.form}>{children}</form>
)
