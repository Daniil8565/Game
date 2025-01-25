import React from 'react'
import { Avatar } from '@/components/ProfileAvatar'
import logo from '../../../image/avatar.svg'
import { NameUser } from '@/components/ProfileNameUser'
import { ListButton } from '@/components/ProfileListButton'
import { UserData } from '@/components/ProfileUserData'
import classes from '../../../styles/profile.module.scss'
import buttonClasses from '../../../components/ProfileButton/Button.module.scss'

interface ButtonData {
  text: string
  onClick?: () => void
  customClass?: string
  style?: React.CSSProperties
}

interface ProfileProps {
  setActiveContent: (content: string) => void
}

export const Profile: React.FC<ProfileProps> = ({ setActiveContent }) => {
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

  const buttonData: ButtonData[] = [
    {
      text: 'Изменить данные',
      onClick: () => setActiveContent('content2'),
      customClass: buttonClasses.link,
    },
    {
      text: 'Изменить пароль',
      onClick: () => setActiveContent('content3'),
      customClass: buttonClasses.link,
    },
    {
      text: 'Выйти',
      customClass: buttonClasses.exit,
    },
  ]

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Avatar id="avatar" src={logo} alt="Добавьте картинку" />
        <NameUser title="vncncjchjc" />
        <UserData dataUser={data} />
        <ListButton buttonData={buttonData} />
      </div>
    </div>
  )
}
