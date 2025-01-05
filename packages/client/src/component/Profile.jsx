import Label from './label'
import Button from './Button'

function Profile({ setActiveContent }) {
  return (
    <div className="content">
      <div className="container__data">
        <img
          id="avatar"
          src="https://ya-praktikum.tech/api/v2/resources//71927ad3-bff5-42aa-bf68-09faf0b1a8f7/e5f1cfd2-f0bc-4421-b494-672ff1cae0e4_2024-12-09_06-52-40.png"
          alt="Добавьте картинку"
          className="avatarProfile"
          onError={e => (e.target.src = '../../image/avatar.svg')}
        />
        <div className="name">vncncjchjc</div>
        <div className="section">
          <Label text="Почта" />
          <div className="description">qazxswrfvqqqdcQ@mail.ru</div>
        </div>
        <div className="section">
          <Label text="Логин" />
          <div className="description">zxcvbnm</div>
        </div>
        <div className="section">
          <Label text="Имя" />
          <div className="description">vncncjchjc</div>
        </div>
        <div className="section">
          <Label text="Фамилия" />
          <div className="description">awdwaw</div>
        </div>
        <div className="section">
          <Label text="Имя в чате" />
          <div className="description">adawdwa</div>
        </div>
        <div className="section">
          <Label text="Телефон" />
          <div className="description">76567456300</div>
        </div>
      </div>
      <div className="container__link">
        <Button
          text="Изменить данные"
          className="link"
          onClick={() => setActiveContent('content2')}
        />
        <Button
          text="Изменить пароль"
          className="link"
          onClick={() => setActiveContent('content3')}
        />
        <Button text="Выйти" className="exit" />
      </div>
    </div>
  )
}

export default Profile
