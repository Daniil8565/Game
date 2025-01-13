import { useState, useEffect } from 'react'

const useFormData = () => {
  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым')

  const [login, setLogin] = useState('')
  const [loginDirty, setLoginDirty] = useState(false)
  const [loginError, setLoginError] = useState('Логин не может быть пустым')

  const [name, setName] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [nameError, setNameError] = useState('Имя не может быть пустым')

  const [surname, setSurname] = useState('')
  const [surnameDirty, setSurnameDirty] = useState(false)
  const [surnameError, setSurnameError] = useState(
    'Фамилия не может быть пустой'
  )

  const [nameChat, setNameChat] = useState('')
  const [nameChatDirty, setNameChatDirty] = useState(false)
  const [nameChatError, setNameChatError] = useState(
    'Имя в чате не может быть пустым'
  )

  const [phone, setPhone] = useState('')
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [phoneError, setPhoneError] = useState(
    'Номер телефона не может быть пустым'
  )

  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (
      emailError ||
      loginError ||
      nameError ||
      surnameError ||
      nameChatError ||
      phoneError
    ) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [
    emailError,
    loginError,
    nameError,
    surnameError,
    nameChatError,
    phoneError,
  ])

  const formData = [
    {
      text: 'Почта',
      className: 'input',
      type: 'email',
      id: 'email',
      name: 'email',
      value: email,
      DataDirty: emailDirty,
      DataError: emailError,
      setData: setEmail,
      setDataError: setEmailError,
      setDataDirty: setEmailDirty,
    },
    {
      text: 'Логин',
      className: 'input',
      type: 'text',
      id: 'login',
      name: 'login',
      value: login,
      DataDirty: loginDirty,
      DataError: loginError,
      setData: setLogin,
      setDataError: setLoginError,
      setDataDirty: setLoginDirty,
    },
    {
      text: 'Имя',
      className: 'input',
      type: 'text',
      id: 'first_name',
      name: 'first_name',
      value: name,
      DataDirty: nameDirty,
      DataError: nameError,
      setData: setName,
      setDataError: setNameError,
      setDataDirty: setNameDirty,
    },
    {
      text: 'Фамилия',
      className: 'input',
      type: 'text',
      id: 'second_name',
      name: 'second_name',
      value: surname,
      DataDirty: surnameDirty,
      DataError: surnameError,
      setData: setSurname,
      setDataError: setSurnameError,
      setDataDirty: setSurnameDirty,
    },
    {
      text: 'Имя в чате',
      className: 'input',
      type: 'text',
      id: 'display_name',
      name: 'display_name',
      value: nameChat,
      DataDirty: nameChatDirty,
      DataError: nameChatError,
      setData: setNameChat,
      setDataError: setNameChatError,
      setDataDirty: setNameChatDirty,
    },
    {
      text: 'Телефон',
      className: 'input',
      type: 'text',
      id: 'phone',
      name: 'phone',
      value: phone,
      DataDirty: phoneDirty,
      DataError: phoneError,
      setData: setPhone,
      setDataError: setPhoneError,
      setDataDirty: setPhoneDirty,
    },
  ]

  return { formData, formValid }
}

export default useFormData
