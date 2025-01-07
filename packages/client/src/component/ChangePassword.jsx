import React, { useState, useEffect } from 'react'
import '../style/changeData.css'
import Label from './Label'
import ErrorMessage from './ErrorMessage'
import Button from './Button'
import passwordHeadler from '../utils/HandlerForm/passwordHeadler'
import repeatPasswordHandler from '../utils/HandlerForm/repeatPasswordhandler'

const ChangeDataForm = () => {
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

  const blurHandler = e => {
    switch (e.target.name) {
      case 'oldPassword':
        setPasswordDirty(true)
        break
      case 'newPassword':
        setNewPasswordDirty(true)
        break
      case 'repeatPassword':
        setRepeatPasswordDirty(true)
        break
    }
  }

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
          <Label text="Старый пароль" />
          <div className="input__span">
            {passwordDirty && passwordError && (
              <ErrorMessage message={passwordError} />
            )}
            <input
              className="input"
              type="password"
              id="oldPassword"
              name="oldPassword"
              onBlur={e => blurHandler(e)}
              onChange={e => passwordHeadler(e, setPassword, setPasswordError)}
              value={password}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Новый пароль" />
          <div className="input__span">
            {newPasswordDirty && newPasswordError && (
              <ErrorMessage message={newPasswordError} />
            )}
            <input
              className="input"
              type="password"
              id="newPassword"
              name="newPassword"
              onBlur={e => blurHandler(e)}
              onChange={e =>
                passwordHeadler(e, setNewPassword, setNewPasswordError)
              }
              value={newPassword}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Повторите новый пароль" />
          <div className="input__span">
            {repeatPasswordDirty && repeatPasswordError && (
              <ErrorMessage message={repeatPasswordError} />
            )}
            <input
              className="input"
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              onBlur={e => blurHandler(e)}
              onChange={e =>
                repeatPasswordHandler(
                  e,
                  setRepeatPassword,
                  setRepeatPasswordError,
                  newPassword
                )
              }
              value={repeatPassword}
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

export default ChangeDataForm
