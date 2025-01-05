import React from 'react'

const ErrorMessage = ({ message }) => {
  return message ? <span className="error__ChangeData">{message}</span> : null
}

export default ErrorMessage
