import React from 'react'
import Avatar from './Avatar'
import logo from '../image/avatar.svg'
import Form from './Form'
import useFormData from '../helpers/DataUser'
import classes from '../style/profile.module.sass'

interface ChangeDataProps {}

const ChangeData: React.FC<ChangeDataProps> = () => {
  const { formData, formValid } = useFormData()

  return (
    <div className={classes.container}>
      <Avatar
        id="avatar"
        src={logo}
        alt="Добавьте картинку"
        className={classes.avatarProfile}
        style={{ marginLeft: '190px', marginRight: '190px' }}
      />
      <Form formData={formData} formValid={formValid} />
    </div>
  )
}

export default ChangeData
