import React from 'react'

const reg = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  login: /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/,
  nameChat: '',
  name: /^[A-Za-zА-Яа-я]{1}[a-za-яA-Z\-]*$/,
  password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
  phone: /^\+?\d{10,15}$/,
}

interface HandlerProps {
  e: React.ChangeEvent<HTMLInputElement>
  setData: React.Dispatch<React.SetStateAction<string>>
  setDataError: React.Dispatch<React.SetStateAction<string>>
}

const valid = (
  e: React.ChangeEvent<HTMLInputElement>,
  setDataError: React.Dispatch<React.SetStateAction<string>>,
  regex: RegExp,
  text: string
) => {
  if (regex.test(e.target.value)) {
    setDataError('')
  } else {
    setDataError(text)
  }
}

const Handler = ({ e, setData, setDataError }: HandlerProps) => {
  setData(e.target.value)

  switch (e.target.id) {
    case 'email':
      valid(e, setDataError, reg.email, 'Неккоректный email')
      break
    case 'login':
      valid(e, setDataError, reg.login, 'Неккоректный login')
      break
    case 'first_name':
      valid(e, setDataError, reg.name, 'Неккоректное имя')
      break
    case 'second_name':
      valid(e, setDataError, reg.name, 'Неккоректная фамилия')
      break
    case 'display_name':
      setDataError(
        e.target.value === '' ? 'Имя в чате не может быть пустым' : ''
      )
      break
    case 'phone':
      valid(e, setDataError, reg.phone, 'Неккоректный телефон')
      break
    case 'oldPassword':
    case 'newPassword':
      valid(
        e,
        setDataError,
        reg.password,
        'Добавьте заглавную букву или цифру.'
      )
      break
    case 'repeatPassword':
      const NewPasswordInput =
        document.querySelector<HTMLInputElement>('#newPassword')
      if (NewPasswordInput && NewPasswordInput.value !== e.target.value) {
        setDataError('Пароли не совпадают')
      } else {
        valid(
          e,
          setDataError,
          reg.password,
          'Добавьте заглавную букву или цифру.'
        )
      }
      break
    default:
      break
  }
}

export default Handler
