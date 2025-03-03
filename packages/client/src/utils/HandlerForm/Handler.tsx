import React from 'react'

const reg = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  login: /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/,
  nameChat: '',
  name: /^[A-Za-zА-Яа-я]{1}[a-zA-Zа-яА-Я-]*$/,
  password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
  phone: /^\+?\d{10,15}$/,
}

interface HandlerProps {
  event: React.ChangeEvent<HTMLInputElement>
  setData: React.Dispatch<React.SetStateAction<string>>
  setDataError: React.Dispatch<React.SetStateAction<string>>
}

const valid = (
  value: string,
  setDataError: React.Dispatch<React.SetStateAction<string>>,
  regex: RegExp,
  errorMessage: string
) => {
  if (regex.test(value)) {
    setDataError('')
  } else {
    setDataError(errorMessage)
  }
}

const Handler = ({ event, setData, setDataError }: HandlerProps) => {
  const { target } = event

  if (!target) return // Защита от ошибок, если target будет undefined.

  const { id, value } = target

  setData(value)

  switch (id) {
    case 'email':
      valid(value, setDataError, reg.email, 'Некорректный email')
      break
    case 'login':
      valid(value, setDataError, reg.login, 'Некорректный login')
      break
    case 'first_name':
      valid(value, setDataError, reg.name, 'Некорректное имя')
      break
    case 'second_name':
      valid(value, setDataError, reg.name, 'Некорректная фамилия')
      break
    case 'display_name':
      setDataError(value === '' ? 'Имя в чате не может быть пустым' : '')
      break
    case 'phone':
      valid(value, setDataError, reg.phone, 'Некорректный телефон')
      break
    case 'oldPassword':
    case 'newPassword':
      valid(value, setDataError, reg.password, 'Неккоректный пароль')
      break
    case 'repeatPassword':
      const newPasswordInput =
        document.querySelector<HTMLInputElement>('#newPassword')
      if (newPasswordInput && newPasswordInput.value !== value) {
        setDataError('Пароли не совпадают')
      } else {
        valid(value, setDataError, reg.password, 'Неккоректный пароль')
      }
      break
    default:
      break
  }
}

export default Handler
