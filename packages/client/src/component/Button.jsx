import React from 'react'

function Button({ text, className, onClick, style, disabled }) {
  return (
    <button
      className={className}
      onClick={onClick}
      style={style}
      disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
