import React from 'react'
import Avatar from './Avatar'
import logo from '../image/avatar.svg'
import Form from './Form'
import useFormPassword from '../helpers/PasswordUser'
import classes from '../style/profile.module.sass'

interface ChangeDataFormProps {}

const ChangeDataForm: React.FC<ChangeDataFormProps> = () => {
  const { formData, formValid } = useFormPassword()

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Avatar
          id="avatar"
          src={logo}
          alt="Добавьте картинку"
          className={classes.avatarProfile}
          style={{ marginLeft: '190px', marginRight: '190px' }}
        />
        <Form formData={formData} formValid={formValid} />
      </div>
    </div>
  )
}

export default ChangeDataForm
