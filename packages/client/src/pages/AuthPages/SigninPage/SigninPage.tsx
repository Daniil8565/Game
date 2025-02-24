import { AuthButton } from '@/components/AuthButton'
import { AuthInput } from '@/components/AuthInput'
import { ErrorMessage } from '@/components/ProfileErrorMessage/ErrorMessage'
import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../../../slices/authSlice'
import { AppDispatch, RootState } from '../../../store/store'
import { AuthForm } from '../components/AuthForm'
import styles from './SinginPage.module.scss'

export const SigninPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error, user } = useSelector((state: RootState) => state.auth)
  const reg = {
    login: /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/,
    password: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
  }
  const [loginValue, setLoginValue] = useState('')
  const [loginDirty, setLoginDirty] = useState<boolean>(false)
  const [loginError, setLoginError] = useState<string>(
    'Логин не может быть пустым'
  )

  const [passwordDirty, setPasswordDirty] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<string>(
    'Некорректный пароль'
  )

  const [networkError, setNetworkError] = useState<string>('')

  const navigate = useNavigate()

  const handleOnChangeLoginInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      event => {
        setLoginValue(event.target.value)
        if (reg.login.test(event.target.value)) {
          setLoginError('')
        } else {
          setLoginError('Некорректный login')
        }
      },
      [loginValue]
    )

  const [passwordValue, setPasswordValue] = useState('')

  const handleOnChangePasswordInput: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      event => {
        const value = event.target.value
        setPasswordValue(event.target.value)
        if (reg.password.test(value)) {
          setPasswordError('')
        } else {
          setPasswordError('Некорректный пароль')
        }
      },
      [passwordValue]
    )

  const handleAuthError = useCallback(
    (errorMsg: string) => {
      if (errorMsg.includes('400')) {
        navigate('/')
        return
      }
      setNetworkError(errorMsg)
    },
    [navigate]
  )

  const handleAuthSuccess = useCallback(
    (userData: any) => {
      console.log(`User info after signin: ${JSON.stringify(userData)}`)
      navigate('/game')
    },
    [navigate]
  )

  const handleClickAuthButton = useCallback(() => {
    const requestData = { login: loginValue, password: passwordValue }
    dispatch(signin(requestData))
      .unwrap()
      .then(handleAuthSuccess)
      .catch(handleAuthError)
  }, [dispatch, loginValue, passwordValue, handleAuthSuccess, handleAuthError])

  const [formValid, setFormValid] = useState<boolean>(false)

  useEffect(() => {
    setFormValid(!loginError && !passwordError)
  }, [loginError, passwordError])

  const blurLogin = () => {
    setLoginDirty(true)
  }

  const blurPassword = () => {
    setPasswordDirty(true)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Авторизация</h1>
      <AuthForm>
        <AuthInput
          name="login"
          value={loginValue}
          onChange={handleOnChangeLoginInput}
          onBlur={blurLogin}
          placeholder="Логин"
          type={'text'}
        />
        {loginDirty && loginError && <ErrorMessage message={loginError} />}
        <AuthInput
          name="password"
          value={passwordValue}
          onChange={handleOnChangePasswordInput}
          onBlur={blurPassword}
          placeholder="Пароль"
          type={'password'}
        />
        {passwordDirty && passwordError && (
          <ErrorMessage message={passwordError} />
        )}
        <AuthButton
          disabled={!formValid || loading}
          text={loading ? 'Вход...' : 'Войти'}
          onClick={handleClickAuthButton}
        />
        {networkError && <ErrorMessage message={networkError} />}
        <span className={styles.container__hint}>
          Еще нет аккаунта? <Link to="/signup">Зарегистрируйтесь!</Link>
        </span>
      </AuthForm>
    </div>
  )
}
