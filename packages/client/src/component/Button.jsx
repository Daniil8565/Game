import React from 'react'

function Button({ text, className, onClick, style }) {
  return (
    <button className={className} onClick={onClick} style={style}>
      {text}
    </button>
  )
}

export default Button
