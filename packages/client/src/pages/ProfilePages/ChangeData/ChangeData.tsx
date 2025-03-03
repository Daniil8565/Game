import React from 'react'
import { Avatar } from '@/components/ProfileAvatar'
import logo from '../../../image/avatar.svg'
import { Form } from '@/components/ProfileForm'
import useFormData from '../../../helpers/DataUser'
import classes from '../Profile/Profile.module.scss'
import { FullscreamImage } from '@/components/fullscreamImage'
import { useNavigate } from 'react-router-dom'
interface ChangeDataProps {}

export const ChangeData: React.FC<ChangeDataProps> = () => {
  const { formData, formValid } = useFormData()
  const navigate = useNavigate()

  return (
    <div className={classes.container}>
      <button className="back-button" onClick={() => navigate(-1)}>
        ❮
      </button>
      <div className={classes.content}>
        <FullscreamImage />
        <Avatar id="avatar" src={logo} alt="Добавьте картинку" />
        <Form formData={formData} formValid={formValid} />
      </div>
    </div>
  )
}
