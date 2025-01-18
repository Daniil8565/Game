import { useState, useEffect } from 'react'

interface FormField {
  text: string
  type: string
  id: string
  name: string
  value: string
  DataDirty: boolean
  DataError: string
  setData: React.Dispatch<React.SetStateAction<string>>
  setDataError: React.Dispatch<React.SetStateAction<string>>
  setDataDirty: React.Dispatch<React.SetStateAction<boolean>>
}

const useFormPassword = () => {
  const [password, setPassword] = useState<string>('')
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<string>(
    'Неккоректный пароль'
  )

  const [newPassword, setNewPassword] = useState<string>('')
  const [newPasswordDirty, setNewPasswordDirty] = useState<boolean>(false)
  const [newPasswordError, setNewPasswordError] = useState<string>(
    'Неккоректный пароль'
  )

  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [repeatPasswordDirty, setRepeatPasswordDirty] = useState<boolean>(false)
  const [repeatPasswordError, setRepeatPasswordError] = useState<string>(
    'Неккоректный пароль'
  )

  const [formValid, setFormValid] = useState<boolean>(false)

  useEffect(() => {
    if (passwordError || newPasswordError || repeatPasswordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [passwordError, newPasswordError, repeatPasswordError])

  const formData: FormField[] = [
    {
      text: 'Старый пароль',
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
