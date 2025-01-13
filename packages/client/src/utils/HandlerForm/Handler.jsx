import React from 'react'

const reg = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  login: /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/,
  nameChat: '',
  name: /^[A-Za-zА-Яа-я]{1}[a-za-яA-Z\-]*$/,
  password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
  phone: /^\+?\d{10,15}$/,
}

function valid(e, setDataError, regex, text) {
  if (regex.test(e.target.value)) {
    setDataError('')
  } else {
    setDataError(text)
  }
}

const Handler = (e, setData, setDataError) => {
  setData(e.target.value)
  if (e.target.id == 'email') {
    const text = 'Неккоректный email'
    valid(e, setDataError, reg.email, text)
  } else if (e.target.id == 'login') {
    const text = 'Неккоректный login'
    valid(e, setDataError, reg.login, text)
  } else if (e.target.id == 'first_name') {
    const text = 'Неккоректное имя'
    valid(e, setDataError, reg.name, text)
  } else if (e.target.id == 'second_name') {
    const text = 'Неккоректная фамилия'
    valid(e, setDataError, reg.name, text)
  } else if (e.target.id == 'display_name') {
    if (e.target.value == '') {
      setDataError('Имя в чате не может быть пустым')
    } else {
      setDataError('')
    }
  } else if (e.target.id == 'phone') {
    const text = 'Неккоректный телефон'
    valid(e, setDataError, reg.phone, text)
  } else if (e.target.id == 'oldPassword') {
    const text = 'Добавьте заглавную букву или цифру.'
    valid(e, setDataError, reg.password, text)
  } else if (e.target.id == 'newPassword') {
    const text = 'Добавьте заглавную букву или цифру.'
    valid(e, setDataError, reg.password, text)
  } else if (e.target.id == 'repeatPassword') {
    const NewPasswordInput = document.querySelector('#newPassword')
    if (NewPasswordInput.value !== e.target.value) {
      setDataError('Пароли не совпадают')
    } else {
      const text = 'Добавьте заглавную букву или цифру.'
      valid(e, setDataError, reg.password, text)
    }
  }
}

export default Handler
