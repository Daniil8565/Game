import React, { useState } from 'react'
import '../style/changeData.css'
import Label from './Label'
import Button from './Button'
import Input from './Input'

const ChangeData = () => {
  const [Content, setContent] = useState('content1')

  return (
    <div className="container">
      <div className="avatarChangeData">
        <span className="avatarChangeDataImage" style={{ opacity: 1 }}></span>
        <span className="avatar__text" style={{ opacity: 0 }}>
          Поменять аватар
        </span>
      </div>
      <p>{Content}</p>

      <form className="form" id="Form">
        <div className="form__content">
          <Label text="Почта" />
          <div className="input__span">
            <Input
              className="input"
              type="email"
              id="email"
              name="email"
              onClick={() => setContent('content3')}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Логин" />
          <div className="input__span">
            <Input
              className="input"
              type="text"
              id="login"
              name="login"
              onChange={() => console.log('---')}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Имя" />
          <div className="input__span">
            <Input
              className="input"
              type="text"
              id="first_name"
              name="first_name"
              onChange={() => console.log('---')}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Фамилия" />
          <div className="input__span">
            <Input
              className="input"
              type="text"
              id="second_name"
              name="second_name"
              onChange={() => console.log('---')}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Имя в чате" />
          <div className="input__span">
            <Input
              className="input"
              type="text"
              id="display_name"
              name="display_name"
              onChange={() => console.log('---')}
            />
          </div>
        </div>

        <div className="form__content">
          <Label text="Телефон" />
          <div className="input__span">
            <Input
              className="input"
              type="text"
              id="phone"
              name="phone"
              onChange={() => console.log('---')}
            />
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

export default ChangeData
