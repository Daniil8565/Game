import React, {
  ChangeEventHandler,
  useCallback,
  useState,
  useEffect,
} from 'react'

import { AuthInput } from '@/components/AuthInput'
import { AuthButton } from '@/components/AuthButton'

import { AuthForm } from '../components/AuthForm'

import styles from './SinginPage.module.scss'
import ErrorMessage from '@/components/ErrorMessage'

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

  const [passwordValue, setPasswordValue] = useState('')
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<string>(
    'Пароль не может быть пустым'
  )

  const handleOnChangeLoginInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginValue(event.target.value)

    if (reg.login.test(event.target.value)) {
      setLoginError('')
    } else {
      setLoginError('Некорректный login')
    }
  }

  const handleOnChangePasswordInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    setPasswordValue(value)

    if (reg.password.test(value)) {
      setPasswordError('')
    } else {
      setPasswordError('Добавьте заглавную букву или цифру.')
    }
  }

  const handleClickAuthButton = useCallback(() => {
    // TODO add authorization
    console.log('login value: ', loginValue)
    console.log('password value: ', passwordValue)
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
          type={'email'}
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
      </AuthForm>
    </div>
  )
}
