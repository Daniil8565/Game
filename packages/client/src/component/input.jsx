import React from 'react'

const Input = ({ type, id, name, className, onClick }) => {
  return (
    <input
      className={className}
      id={id}
      name={name}
      type={type}
      onClick={onClick}
    />
  )
}

export default Input
