import React, { ButtonHTMLAttributes } from 'react'
import classes from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string // Дополнительный класс для кнопки
}

export const Button: React.FC<ButtonProps> = ({
  children,
  customClass,
  ...props
}) => {
  return (
    <button className={`${classes.link} ${customClass || ''}`} {...props}>
      {children}
    </button>
  )
}
