import React from 'react'
import classes from '../style/profile.module.sass'

interface ErrorMessageProps {
  message?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return message ? (
    <span className={classes.error__ChangeData}>{message}</span>
  ) : null
}

export default ErrorMessage
