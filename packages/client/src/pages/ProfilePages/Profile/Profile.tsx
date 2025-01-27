import React from 'react'
import { Avatar } from '@/components/ProfileAvatar'
import logo from '../../../image/avatar.svg'
import { Link } from 'react-router-dom'
import { NameUser } from '@/components/ProfileNameUser'
import { UserData } from '@/components/ProfileUserData'
import classes from './Profile.module.scss'

export const Profile: React.FC = () => {
  const data = [
    {
      text: 'Почта',
      description: 'qazxswrfvqqqdcQ@mail.ru',
    },
    {
      text: 'Логин',
      description: 'zxcvbnm',
    },
    {
      text: 'Имя',
      description: 'vncncjchjc',
    },
    {
      text: 'Фамилия',
      description: 'awdwaw',
    },
    {
      text: 'Имя в чате',
      description: 'adawdwa',
    },
    {
      text: 'Телефон',
      description: '76567456300',
    },
  ]
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Avatar id="avatar" src={logo} alt="Добавьте картинку" />
        <NameUser title="vncncjchjc" />
        <UserData dataUser={data} />
        <div className={classes.container__link}>
          <Link className={classes.link} to="/profile/editData">
            Изменить данные
          </Link>
          <Link className={classes.link} to="/profile/editPassword">
            Изменить пароль
          </Link>
        </div>
      </div>
    </div>
  )
}
