import React, { InputHTMLAttributes } from 'react'
import classes from '../../../style/profile.module.sass'

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const MyInput: React.FC<MyInputProps> = props => {
  return <input className={classes.input} {...props} />
}

export default MyInput
