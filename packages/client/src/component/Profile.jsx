import Avatar from './Avatar'
import logo from '../image/avatar.svg'
import NameUser from './nameUser'
import ListButton from './ListButton'
import UserData from './UserData'

function Profile({ setActiveContent }) {
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
  const buttonData = [
    {
      text: ' Изменить данные',
      className: 'link',
      onClick: () => setActiveContent('content2'),
    },
    {
      text: 'Изменить пароль',
      className: 'link',
      onClick: () => setActiveContent('content3'),
    },
    {
      text: 'Выйти',
      className: 'exit',
    },
  ]
  return (
    <div className="content">
      <div className="container__data">
        <Avatar
          id="avatar"
          src={logo}
          alt="Добавьте картинку"
          className="avatarProfile"
          onError={e => (e.target.src = '../../image/avatar.svg')}
        />
        <NameUser title="vncncjchjc" />
        <UserData dataUser={data} />
        <ListButton buttonData={buttonData} />
      </div>
    </div>
  )
}

export default Profile
