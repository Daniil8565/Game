import React from 'react'
import classes from './ErrorMessage.module.scss'

interface ErrorMessageProps {
  message?: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return message ? (
    <span className={classes.error__ChangeData}>{message}</span>
  ) : null
}
