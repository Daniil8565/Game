import React, { InputHTMLAttributes } from 'react'
import classes from './MyInput.module.scss'

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const MyInput: React.FC<MyInputProps> = props => {
  return <input className={classes.input} {...props} />
}
