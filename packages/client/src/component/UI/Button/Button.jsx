import React from 'react'

function Button({ children, ...props }) {
  return (
    // <button
    //   className={className}
    //   onClick={onClick}
    //   style={style}
    //   disabled={disabled}>
    //   {text}
    // </button>
    <button {...props}>{children}</button>
  )
}

export default Button
