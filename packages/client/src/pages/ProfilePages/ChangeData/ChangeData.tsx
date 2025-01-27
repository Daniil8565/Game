import React from 'react'
import { Avatar } from '@/components/ProfileAvatar'
import logo from '../../../image/avatar.svg'
import { Form } from '@/components/ProfileForm'
import useFormData from '../../../helpers/DataUser'
import classes from '../Profile/Profile.module.scss'

interface ChangeDataProps {}

export const ChangeData: React.FC<ChangeDataProps> = () => {
  const { formData, formValid } = useFormData()

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Avatar id="avatar" src={logo} alt="Добавьте картинку" />
        <Form formData={formData} formValid={formValid} />
      </div>
    </div>
  )
}
