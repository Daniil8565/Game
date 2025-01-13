import { useState, useEffect } from 'react'

const useFormPassword = () => {
  const [password, setPassword] = useState('')
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым'
  )

  const [newPassword, setNewPassword] = useState('')
  const [newPasswordDirty, setNewPasswordDirty] = useState(false)
  const [newPasswordError, setNewPasswordError] = useState(
    'Пароль не может быть пустым'
  )

  const [repeatPassword, setRepeatPassword] = useState('')
  const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false)
  const [repeatPasswordError, setRepeatPasswordError] = useState(
    'Пароль не может быть пустым'
  )

  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (passwordError || newPasswordError || repeatPasswordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [passwordError, newPasswordError, repeatPasswordError])

  const formData = [
    {
      text: 'Старый пароль',
      className: 'input',
      type: 'password',
      id: 'oldPassword',
      name: 'oldPassword',
      value: password,
      DataDirty: passwordDirty,
      DataError: passwordError,
      setData: setPassword,
      setDataError: setPasswordError,
      setDataDirty: setPasswordDirty,
    },
    {
      text: 'Новый пароль',
      className: 'input',
      type: 'password',
      id: 'newPassword',
      name: 'newPassword',
      value: newPassword,
      DataDirty: newPasswordDirty,
      DataError: newPasswordError,
      setData: setNewPassword,
      setDataError: setNewPasswordError,
      setDataDirty: setNewPasswordDirty,
    },
    {
      text: 'Повторите новый пароль',
      className: 'input',
      type: 'password',
      id: 'repeatPassword',
      name: 'repeatPassword',
      value: repeatPassword,
      DataDirty: repeatPasswordDirty,
      DataError: repeatPasswordError,
      setData: setRepeatPassword,
      setDataError: setRepeatPasswordError,
      setDataDirty: setRepeatPasswordDirty,
    },
  ]

  return { formData, formValid }
}

export default useFormPassword
