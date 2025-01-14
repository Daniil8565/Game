import React, { ButtonHTMLAttributes } from 'react'
import classes from '../../../style/profile.module.sass'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string // Дополнительный класс для кнопки
}

const Button: React.FC<ButtonProps> = ({ children, customClass, ...props }) => {
  return (
    <button className={`${classes.link} ${customClass || ''}`} {...props}>
      {children}
    </button>
  )
}

export default Button
