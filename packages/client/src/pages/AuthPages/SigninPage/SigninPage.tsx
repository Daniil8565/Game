import React, {
  ChangeEventHandler,
  useCallback,
  useState,
  useEffect,
} from 'react'

import { AuthInput } from '@/components/AuthInput'
import { AuthButton } from '@/components/AuthButton'
import { ErrorMessage } from '@/components/ProfileErrorMessage/ErrorMessage'
import { AuthForm } from '../components/AuthForm'
import { SigninService } from '@/services/SigninService'
import { Link, useNavigate } from 'react-router-dom'

import styles from './SinginPage.module.scss'

export const SigninPage: React.FC = () => {
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
    'Неккоректный пароль'
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
          setPasswordError('Неккоректный пароль')
        }
      },
      [passwordValue]
    )

  const handleAuthError = useCallback((errorMsg: string) => {
    setNetworkError(errorMsg)
  }, [])

  const handleAuthSuccess = useCallback(() => {
    navigate('/')
  }, [])

  const handleClickAuthButton = useCallback(() => {
    const signinService = new SigninService()
    signinService
      .requestData({
        requestData: { login: loginValue, password: passwordValue },
        errorCallback: handleAuthError,
        successCallback: handleAuthSuccess,
      })
      .catch(handleAuthError)
  }, [loginValue, passwordValue])

  const blurLogin = () => {
    setLoginDirty(true)
  }

  const blurPassword = () => {
    setPasswordDirty(true)
  }

  const [formValid, setFormValid] = useState<boolean>(false)

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [loginError, passwordError])

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
          disabled={!formValid}
          text="Войти"
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
