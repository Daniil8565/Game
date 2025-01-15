import React, {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react'

import styles from './AuthInput.module.scss'

interface IAuthInput {
  onBlur: FocusEventHandler<HTMLInputElement>
  placeholder?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  value?: string
  type: HTMLInputTypeAttribute
  name: string
}

export const AuthInput: React.FC<IAuthInput> = ({
  onBlur,
  placeholder,
  onChange,
  value = '',
  type,
  name,
}) => {
  return (
    <div className={styles.input__wrapper}>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder=" "
        name={name}
      />
      <div className={styles.input__cut}></div>
      <label className={styles.input__placeholder}>{placeholder}</label>
    </div>
  )
}
