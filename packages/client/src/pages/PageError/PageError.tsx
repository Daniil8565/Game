import style from './PageError.module.scss'
import '../../assets/reset.scss'
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
