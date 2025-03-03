import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import classes from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string // Дополнительный класс для кнопки
  onClick?: MouseEventHandler<HTMLButtonElement> // Типизация обработчика клика
}

export const Button: React.FC<ButtonProps> = ({
  children,
  customClass,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`${classes.link} ${customClass || ''}`}
      onClick={onClick} // onClick теперь имеет тип MouseEventHandler
      {...props}>
      {children}
    </button>
  )
}
