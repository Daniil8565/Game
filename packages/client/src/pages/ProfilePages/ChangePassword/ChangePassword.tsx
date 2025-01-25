import React from 'react'
import { Avatar } from '@/components/ProfileAvatar'
import logo from '../../../image/avatar.svg'
import { Form } from '@/components/ProfileForm'
import useFormPassword from '../../../helpers/PasswordUser'
import classes from '../../../styles/profile.module.scss'

interface ChangeDataFormProps {}

export const ChangeDataForm: React.FC<ChangeDataFormProps> = () => {
  const { formData, formValid } = useFormPassword()

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Avatar id="avatar" src={logo} alt="Добавьте картинку" />
        <Form formData={formData} formValid={formValid} />
      </div>
    </div>
  )
}
