import '../../styles/reset.scss'
import style from './PageError.module.scss'
type PageErrorProps = {
  code: number
  message: string
  image: string
  rounded?: boolean
}

const PageError: React.FC<PageErrorProps> = ({
  code,
  message,
  image,
  rounded,
}) => {
  const imgClass = `${style.pageError__img} ${
    rounded ? style['pageError__img--rounded'] : ''
  }`

  return (
    <div className={style.pageError}>
      <img src={image} className={imgClass} alt="Error" />
      <h1 className={style.pageError__title}>{code}</h1>
      <p className={style.pageError__message}>{message}</p>
    </div>
  )
}
export { PageError }

// примеры использования
// import error500Image from './image/fixiki.png'
// import error404Image from './image/humster.png'
// import { PageError } from './pages/PageError'

{
  /*
  <PageError
	  code={500}
	  message="Всё сломалось, но мы уже летим чинить"
	  image={error500Image}
  />
  
  <PageError
	  code={404}
	  message="Такой страницы не существует :("
	  image={error404Image}
	  rounded={true}
  />
  */
}
