import React, { useEffect, useState } from 'react'
import '../style/changeData.css'
import Label from './Label'
import Button from './Button'
import ErrorMessage from './ErrorMessage'
import emailHandler from '../utils/HandlerForm/emailHandler'
import loginHandler from '../utils/HandlerForm/loginHandler'
import nameHandler from '../utils/HandlerForm/nameHandler'
import surnameHandler from '../utils/HandlerForm/surnameHandler'
import nameChatHandler from '../utils/HandlerForm/nameChatHandler'
import phoneHandler from '../utils/HandlerForm/phoneHandler.jsx'

const ChangeData = () => {
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
  const [nameChatDirty, setnameChatDirty] = useState(false)
  const [nameChatError, setnameChatError] = useState(
    'Имя в чате не может быть пустым'
  )

  const [phone, setPhone] = useState('')
  const [phoneDirty, setPhoneDirty] = useState(false)
  const [phoneError, setPhoneError] = useState(
    'Номер телефона не может быть пустым'
  )

  const [formValid, setFormValid] = useState(false)

  const blurHandler = e => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'login':
        setLoginDirty(true)
        break
      case 'first_name':
        setNameDirty(true)
        break
      case 'second_name':
        setSurnameDirty(true)
        break
      case 'display_name':
        setnameChatDirty(true)
        break
      case 'phone':
        setPhoneDirty(true)
        break
    }
  }

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

  return (
    <div className="container">
      <div className="avatarChangeData">
        <span className="avatarChangeDataImage" style={{ opacity: 1 }}></span>
        <span className="avatar__text" style={{ opacity: 0 }}>
          Поменять аватар
        </span>
      </div>

      <form className="form" id="Form">
        <div className="form__content">
          <Label text="Почта" />
          <div className="input__span">
            {emailDirty && emailError && <ErrorMessage message={emailError} />}
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              onBlur={e => blurHandler(e)}
              onChange={e => emailHandler(e, setEmail, setEmailError)}
              value={email}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Логин" />
          <div className="input__span">
            {loginDirty && loginError && <ErrorMessage message={loginError} />}
            <input
              className="input"
              type="text"
              id="login"
              name="login"
              onBlur={e => blurHandler(e)}
              onChange={e => loginHandler(e, setLogin, setLoginError)}
              value={login}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Имя" />
          <div className="input__span">
            {nameDirty && nameError && <ErrorMessage message={nameError} />}
            <input
              className="input"
              type="text"
              id="first_name"
              name="first_name"
              onBlur={e => blurHandler(e)}
              onChange={e => nameHandler(e, setName, setNameError)}
              value={name}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Фамилия" />
          <div className="input__span">
            {surnameDirty && surnameError && (
              <ErrorMessage message={surnameError} />
            )}
            <input
              className="input"
              type="text"
              id="second_name"
              name="second_name"
              onBlur={e => blurHandler(e)}
              onChange={e => surnameHandler(e, setSurname, setSurnameError)}
              value={surname}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Имя в чате" />
          <div className="input__span">
            {nameChatDirty && nameChatError && (
              <ErrorMessage message={nameChatError} />
            )}
            <input
              className="input"
              type="text"
              id="display_name"
              name="display_name"
              onBlur={e => blurHandler(e)}
              onChange={e => nameChatHandler(e, setNameChat, setnameChatError)}
              value={nameChat}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Телефон" />
          <div className="input__span">
            {phoneDirty && phoneError && <ErrorMessage message={phoneError} />}
            <input
              className="input"
              type="text"
              id="phone"
              name="phone"
              onBlur={e => blurHandler(e)}
              onChange={e => phoneHandler(e, setPhone, setPhoneError)}
              value={phone}
            />
          </div>
        </div>

        <Button
          className="link"
          text="Сохранить"
          disabled={!formValid}
          style={{
            marginTop: '15px',
          }}
        />
      </form>
    </div>
  )
}

export default ChangeData
