import { useState, useEffect } from 'react'

interface FormField {
  text: string
  type: string
  id: string
  name: string
  value: string
  DataDirty: boolean
  DataError: string | null
  setData: React.Dispatch<React.SetStateAction<string>>
  setDataError: React.Dispatch<React.SetStateAction<string>>
  setDataDirty: React.Dispatch<React.SetStateAction<boolean>>
}

const useFormData = () => {
  const [email, setEmail] = useState<string>('')
  const [emailDirty, setEmailDirty] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>(
    'Email не может быть пустым'
  )

  const [login, setLogin] = useState<string>('')
  const [loginDirty, setLoginDirty] = useState<boolean>(false)
  const [loginError, setLoginError] = useState<string>(
    'Логин не может быть пустым'
  )

  const [name, setName] = useState<string>('')
  const [nameDirty, setNameDirty] = useState<boolean>(false)
  const [nameError, setNameError] = useState<string>('Имя не может быть пустым')

  const [surname, setSurname] = useState<string>('')
  const [surnameDirty, setSurnameDirty] = useState<boolean>(false)
  const [surnameError, setSurnameError] = useState<string>(
    'Фамилия не может быть пустой'
  )

  const [nameChat, setNameChat] = useState<string>('')
  const [nameChatDirty, setNameChatDirty] = useState<boolean>(false)
  const [nameChatError, setNameChatError] = useState<string>(
    'Имя в чате не может быть пустым'
  )

  const [phone, setPhone] = useState<string>('')
  const [phoneDirty, setPhoneDirty] = useState<boolean>(false)
  const [phoneError, setPhoneError] = useState<string>(
    'Номер телефона не может быть пустым'
  )

  const [formValid, setFormValid] = useState<boolean>(false)

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

  const formData: FormField[] = [
    {
      text: 'Почта',
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
