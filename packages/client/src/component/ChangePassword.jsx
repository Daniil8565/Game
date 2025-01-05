import React, { useState } from 'react'
import '../style/changeData.css'
import Label from './Label'
import ErrorMessage from './ErrorMessage'
import Button from './Button'
import Input from './input'

const ChangeDataForm = () => {
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
            <Input
              className="input"
              type="password"
              id="oldPassword"
              name="oldPassword"
            />
            <ErrorMessage />
          </div>
        </div>

        <div className="form__content">
          <Label text="Новый пароль" />
          <div className="input__span">
            <Input
              className="input"
              type="password"
              id="newPassword"
              name="newPassword"
            />
            <ErrorMessage />
          </div>
        </div>

        <div className="form__content">
          <Label text="Повторите новый пароль" />
          <div className="input__span">
            <Input
              className="input"
              type="password"
              id="repeatPassword"
              name="repeatPassword"
            />
            <ErrorMessage />
          </div>
        </div>

        <Button
          className="link"
          text="Сохранить"
          style={{
            marginTop: '15px',
          }}
        />
      </form>
    </div>
  )
}

export default ChangeDataForm
