import React, { useEffect, useState } from 'react'
import '../style/changeData.css'
import Avatar from './Avatar.jsx'
import logo from '../image/avatar.svg'
import Form from './Form.jsx'
import useFormData from '../helpers/DataUser.jsx'

const ChangeData = () => {
  const { formData, formValid } = useFormData()

  return (
    <div className="container">
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

export default ChangeData
