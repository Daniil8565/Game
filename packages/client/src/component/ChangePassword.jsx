import React, { useState, useEffect } from 'react'
import '../style/changeData.css'
import Avatar from './Avatar'
import logo from '../image/avatar.svg'
import Form from './Form.jsx'
import useFormPassword from '../helpers/PasswordUser.jsx'

const ChangeDataForm = () => {
  const { formData, formValid } = useFormPassword()
  return (
    <div className="container">
      {/* <div className="avatarChangeData">
        <span className="avatarChangeDataImage" style={{ opacity: 1 }}></span>
        <span className="avatar__text" style={{ opacity: 0 }}>
          Поменять аватар
        </span>
      </div> */}
      <Avatar
        id="avatar"
        src={logo}
        alt="Добавьте картинку"
        className="avatarProfile"
        onError={e => (e.target.src = '../../image/avatar.svg')}
        style={{ marginLeft: '190px', marginRight: '190px' }}
      />
      <Form formData={formData} formValid={formValid} />
    </div>
  )
}

export default ChangeDataForm
