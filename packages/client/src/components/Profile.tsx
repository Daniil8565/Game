import React from 'react'
import Avatar from './Avatar'
import logo from '../image/avatar.svg'
import NameUser from './NameUser'
import ListButton from './ListButton'
import UserData from './UserData'
import classes from '../style/profile.module.sass'

interface ButtonData {
  text: string
  onClick?: () => void
  customClass?: string
  style?: React.CSSProperties
}

interface ProfileProps {
  setActiveContent: (content: string) => void
}

const Profile: React.FC<ProfileProps> = ({ setActiveContent }) => {
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
      customClass: classes.link,
    },
    {
      text: 'Изменить пароль',
      onClick: () => setActiveContent('content3'),
      customClass: classes.link,
    },
    {
      text: 'Выйти',
      customClass: classes.exit,
    },
  ]

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Avatar
          id="avatar"
          src={logo}
          alt="Добавьте картинку"
          className={classes.avatarProfile}
        />
        <NameUser title="vncncjchjc" />
        <UserData dataUser={data} />
        <ListButton buttonData={buttonData} />
      </div>
    </div>
  )
}

export default Profile
